import webpack from 'webpack';
import merge from 'webpack-merge';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config';
import env from '../server/env';
import apiRouter from '../server/api/apiRouter';

const port = env.webpack.port;
const devWebpackConfig = merge(webpackConfig, {
    entry: {
        app: [
            `webpack-dev-server/client?http://localhost:${port}/`,
        ]
    },
    output: {
        publicPath: `http://localhost:${port}/`,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
    ]
});

const app = new WebpackDevServer(webpack(devWebpackConfig), {
    inline: true,
    compress: false,
    stats: {
        chunks: false,
        children: false,
        colors: true
    },
    historyApiFallback: true,
});

app.use('/apis/mobile', apiRouter);

app.listen(port, err => {
    if (err) {
        console.error(err);
    } else {
        console.info(`open link http://localhost:${port} `)
    }
})