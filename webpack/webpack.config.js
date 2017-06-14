const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
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
    chunks: ['vendor', 'app'],
});

module.exports = {
    context: path.join(__dirname, '..'),
    entry: {
        vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'react-redux',
            'prop-types'
        ],
        app: ['./client/index.tsx']
    },
    output: {
        path: path.join(__dirname, '../assets/dist'),
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
                loader: 'ts-loader'
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
            name: 'vendor',
            filename: 'vendor.bundle_[hash:8].js',
            minChunks: Infinity
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.BannerPlugin('This file is created by Yota')
    ],
    node: {
        'child_process': 'empty'
    }
}