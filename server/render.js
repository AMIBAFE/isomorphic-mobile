import * as fs from "fs";
import * as path from "path";
import { Promise } from "thenfail";

import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { RouterContext, match, StaticRouter } from "react-router";
import { Route, Link, Switch } from "react-router-dom";
import { flushServerSideRequirePaths } from "react-loadable/lib";

import storeApp from "../common/configStore";
import routesApp from "../common/routes";

const babelInterop = obj => (obj && obj.__esModule ? obj.default : obj);

function renderFullPage(html, initState) {
    const assets = JSON.parse(
        fs.readFileSync(path.join(__dirname, "../webpack/webpack-assets.json"))
    );
    const manifestJs = assets.javascript.manifest;
    const vendorJs = assets.javascript.vendor;
    const appJs = assets.javascript.app;
    const appCss = assets.styles.app;

    return `
        <!DOCTYPE html>
        <html>
            <body>
                it is a test!
            </body>   
        </html>`;

    // return `
    //     <!DOCTYPE html>
    //     <html>
    //     <head>
    //         <meta charset="utf-8">
    //         <meta name="applicable-device" content="mobile" />
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
    //         />
    //         <meta name="apple-mobile-web-app-capable" content="yes" />
    //         <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    //         <meta name="msapplication-tap-highlight" content="no" />

    //         <meta name="keywords" content="${initState.seo.keywords.join(",") ||
    //             "全民教育"}">
    //         <meta name="description" content="${initState.seo.description ||
    //             "全民教育"}">
    //         <title>${initState.seo.title || "全民教育网移动端官网"}</title>
    //         <link href="${appCss}" rel="stylesheet">
    //     </head>
    //     <body>
    //         <div id="container" class="layout">${html}</div>
    //         <script>
    //             window.__INITIAL_STATE__ = ${JSON.stringify(initState)}
    //         </script>
    //         <script src="${manifestJs}"></script>
    //         <script src="${vendorJs}"></script>
    //         <script src="${appJs}"></script>
    //     </body>
    //     </html>
    // `;
}

function renderApp(store, context, req) {
    return renderToString(
        <Provider store={store}>
            <StaticRouter location={req.originalUrl} context={context}>
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
            .map(component => component.fetch(store, req.params))
    )
        .then(() => {
            const html = renderApp(store, context, req);
            const finalState = store.getState();

            res.end(renderFullPage(html, finalState));
        })
        .fail(err => {
            res.end(`500 ${err}`);
        });
}
