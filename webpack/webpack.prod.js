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
    template: `${__dirname}/../client/index.html`,
    filename: 'index.html',
    inject: true
});

var extractCSSPlugin = new ExtractTextPlugin('[name]_[hash:8].css');

module.exports = {
    context: path.join(__dirname, '..'),
    entry: ['./client/index.tsx'],
    output: {
        path: path.resolve(__dirname, '../assets/dist'),
        publicPath: '/dist/',
        filename: '[name].[hash:8].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.less', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [
                    path.resolve(__dirname, '../node_modules')
                ],
                loader: 'ts-loader'
            }, {
                test: /\.less$/,
                exclude: [
                    path.resolve(__dirname, '../node_modules')
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
        extractCSSPlugin,
        webpack_isomorphic_tools_plugin,
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.BannerPlugin('This file is created by Yota')
    ],
}