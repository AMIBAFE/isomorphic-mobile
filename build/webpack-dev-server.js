import * as opn from 'opn';
import * as express from 'express';
import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import * as WebpackDevServer from 'webpack-dev-server';
import * as FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';
import * as bodyParser from 'body-parser';
import * as webpackConfig from './webpack.config';
import env from '../server/env';
import apiRouter from '../server/api/apiRouter';

const port = env.webpack.port;
const uri = `http://localhost:${port}/`;
const devWebpackConfig = merge(webpackConfig, {
    entry: {
        vendor: [`webpack-dev-server/client?${uri}`],
        app: [`webpack-dev-server/client?${uri}`]
    },
    output: {
        publicPath: uri,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new FriendlyErrorsPlugin(),
    ]
});

const app = new WebpackDevServer(webpack(devWebpackConfig), {
    hot: true,
    inline: true,
    compress: false,
    stats: {
        chunks: false,
        children: false,
        colors: true
    },
    historyApiFallback: true,
    quiet: true,
    publicPath: uri,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/apis/mobile', apiRouter);

app.listen(port, err => {
    if (err) {
        console.error(err);
    } else {
        console.info(`open link ${uri}`)
    }
})