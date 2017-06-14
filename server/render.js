import * as fs from 'fs';
import * as path from 'path';
import { Promise } from 'thenfail';

import * as React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { RouterContext, match, StaticRouter } from 'react-router';
import { Route, Link, Switch } from 'react-router-dom';
import { flushServerSideRequirePaths } from 'react-loadable/lib';

import storeApp from '../common/configStore';
import routesApp from '../common/routes';

const babelInterop = obj => (
    obj && obj.__esModule ? obj.default : obj
);

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
            <div id="container">${html}</div>
            <script>
                console.log('fuck server');
                window.__INITIAL_STATE__ = ${JSON.stringify(initState)}
            </script>
            <script src=${vendorJs}></script>
            <script src=${appJs}></script>
        </body>
        </html>
    `;
}

function renderApp(store, context, req) {
    return renderToString(
        <Provider store={store}>
            <StaticRouter
                location={req.originalUrl}
                context={context}
            >
                {routesApp}
            </StaticRouter>
        </Provider>
    );
}

export default function handleRender(req, res) {
    const context = {};
    const store = storeApp({});

    // First render to get modules paths
    renderApp(store, context, req);

    const requires = flushServerSideRequirePaths();

    Promise.all(
        requires
            .map(file => babelInterop(require(file)))
            .filter(component => Boolean(component && component.fetch))
            .map(component => component.fetch(store))
    ).then(() => {
        const html = renderApp(store, context, req);
        const finalState = store.getState();

        res.end(renderFullPage(html, finalState));
    }).fail(err => {
        res.end(`500 ${err}`);
    })


}