import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import * as WebpackDevServer from 'webpack-dev-server'
import * as bodyParser from 'body-parser';;
import * as webpackConfig from './webpack.config';
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/apis/mobile', apiRouter);

app.listen(port, err => {
    if (err) {
        console.error(err);
    } else {
        console.info(`open link http://localhost:${port} `)
    }
})