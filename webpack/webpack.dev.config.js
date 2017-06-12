const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin');

const webpack_isomorphic_tools_plugin =
    new Webpack_isomorphic_tools_plugin(require('./webpack-isomorphic-tools-configuration'))
        .development()

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname, '../client/index.html'),
    filename: 'index.html',
    inject: true,
    chunks: ['commons', 'app'],
    minify: __DEVELOPMENT__ ? false : {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeComments: true
    }
});

const port = 3001;

console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)
module.exports = {
    context: path.join(__dirname, '..'),
    entry: {
        app: [
            `webpack-dev-server/client?http://localhost:${port}/`,
            './client/index.tsx'
        ],
    },
    output: {
        path: path.join(__dirname, '../assets/dist'),
        publicPath: `http://localhost:${port}/`,
        filename: '[name].[hash:8].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.less', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.js|tsx?$/,
                exclude: [
                    path.join(__dirname, '../node_modules')
                ],
                use: 'ts-loader'
            }, {
                test: /\.less$/,
                exclude: [
                    path.join(__dirname, '../node_modules')
                ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => {
                                require('autoprefixer')()
                            }
                        }
                    }, 'less-loader']
                }),
            }, {
                test: webpack_isomorphic_tools_plugin.regular_expression('images'),
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240
                    }
                }],
            }
        ],
    },
    plugins: [
        HtmlWebpackPluginConfig,
        webpack_isomorphic_tools_plugin,
        new ExtractTextPlugin('[name]_[hash:8].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.bundle_[hash:8].js',
            minChunks: 2
            // name: 'lib',
            // filename: 'lib.bundle_[hash:8].js'
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
            // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.BannerPlugin('This file is created by Yota')
    ],
}