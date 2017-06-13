import * as fs from 'fs';
import * as path from 'path';
import { Promise } from 'thenfail';

import * as React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { RouterContext, match, StaticRouter } from 'react-router';
import { Route, Link, Switch } from 'react-router-dom';

import storeApp from '../common/configStore';
import routesApp from '../common/routes';
import { fetchUser } from '../common/actions/common';

function renderFullPage(html, initState) {
    const assets = JSON.parse(fs.readFileSync(path.join(__dirname, '../webpack/webpack-assets.json')));
    const vendorJs = assets.javascript.vendor;
    const appJs = assets.javascript.app;
    const appCss = assets.styles.app;

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            
            <title>react-ssr</title>
            <link rel="icon" href="//o4j806krb.qnssl.com/public/images/cnode_icon_32.png" type="image/x-icon">
            <link href=${appCss} rel="stylesheet">
        </head>
        <body>
            <div id="container"><div>${html}</div></div>
            <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(initState)}
            </script>
            <script src=${vendorJs}></script>
            <script src=${appJs}></script>
        </body>
        </html>
    `;
}

export default function handleRender(req, res) {
    const context = {};
    const store = storeApp({});

    Promise
        .resolve(store.dispatch(fetchUser()))
        .then(() => {
            const html = renderToString(
                <Provider store={store}>
                    <StaticRouter
                        location={req.originalUrl}
                        context={context}
                    >
                        {routesApp}
                    </StaticRouter>
                </Provider>
            );
            const finalState = store.getState();

            res.end(renderFullPage(html, finalState));
        })
        .fail(err => {
            res.end(`500 ${err}`);
        })


}