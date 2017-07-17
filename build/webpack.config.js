const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const Webpack_isomorphic_tools_plugin = require("webpack-isomorphic-tools/plugin");

const webpack_isomorphic_tools_plugin = new Webpack_isomorphic_tools_plugin(
    require("./webpack-isomorphic-tools-configuration")
).development();
console.log("__dirname", __dirname);
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname, "../client/index.html"),
    filename: "index.html",
    inject: true,
    chunks: ["manifest", "vendor", "app"]
});

const NODE_MODULES_PATH = path.resolve(__dirname, "../node_modules");
const BUILD_PATH = path.resolve(__dirname, "../build");

module.exports = {
    context: path.join(__dirname, ".."),
    entry: {
        vendor: [
            "react",
            "react-dom",
            "react-router-dom",
            "react-redux",
            "prop-types"
        ],
        app: ["./client/index.tsx"]
    },
    output: {
        path: path.join(__dirname, "../assets/dist"),
        filename: "[name].[chunkhash:8].js",
        chunkFilename: "[name].[chunkhash:8].chunk.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        modules: [NODE_MODULES_PATH],
        alias: {
            react: "react/dist/react.js",
            "react-dom": "react-dom/dist/react-dom.js",
            "react-redux": "react-redux/dist/react-redux.js"
        }
    },
    module: {
        rules: [
            {
                test: /\.js|tsx?$/,
                exclude: [BUILD_PATH, NODE_MODULES_PATH],
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                }
            },
            {
                test: /\.css|less$/,
                exclude: [BUILD_PATH, NODE_MODULES_PATH],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: loader => [require("autoprefixer")()]
                            }
                        },
                        "less-loader"
                    ]
                })
            },
            {
                test: webpack_isomorphic_tools_plugin.regular_expression(
                    "images"
                ),
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10240,
                            name: "images/[name].[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        webpack_isomorphic_tools_plugin,
        new ExtractTextPlugin("[name].[chunkhash:8].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor", "manifest"],
            filename: "[name].[chunkhash:8].js",
            minChunks: Infinity
        }),
        new ForkTsCheckerWebpackPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.BannerPlugin("This file is created by Yota")
    ],
    node: {
        child_process: "empty"
    }
};
