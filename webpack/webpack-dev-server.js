import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.dev.config';

const port = 3001;
const app = new WebpackDevServer(webpack(webpackConfig), {
    hot: true,
    inline: true,
    compress: false,
    stats: {
        chunks: false,
        children: false,
        colors: true
    },
    historyApiFallback: true,
})

app.listen(port, err => {
    if (err) {
        console.error(err);
    } else {
        console.info(`open link http://localhost:${port} `)
    }
})