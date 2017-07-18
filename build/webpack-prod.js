import * as ora from "ora";
import * as chalk from "chalk";
import * as rm from "rimraf";
import * as path from "path";

import * as webpack from "webpack";
import * as merge from "webpack-merge";
import * as webpackConfig from "./webpack.config";
import * as ExtractTextPlugin from "extract-text-webpack-plugin";
import env from "../server/env";

const port = env.server.port;
const distPath = path.join(__dirname, "../assets/dist");
const spinner = ora("webpack working");
spinner.start();

const prodWebpackConfig = merge(webpackConfig, {
    output: {
        publicPath: "/dist/",
        filename: "[name].[chunkhash:8].js",
        chunkFilename: "[name].[chunkhash:8].chunk.js"
    },
    resolve: {
        alias: {
            react: "react/dist/react.min.js",
            "react-dom": "react-dom/dist/react-dom.min.js",
            "react-redux": "react-redux/dist/react-redux.min.js"
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                // 删除所有的'console'语句
                drop_console: true
            }
        }),
        new webpack.HashedModuleIdsPlugin(),
        new ExtractTextPlugin("[name].[chunkhash:8].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor", "manifest"],
            filename: "[name].[chunkhash:8].js",
            minChunks: Infinity
        })
    ]
});

rm(distPath, err => {
    if (err) throw err;

    webpack(prodWebpackConfig, err => {
        spinner.stop();

        if (err) {
            console.log(chalk.red("fail! \n" + err));
        } else {
            console.log(chalk.green("done!"));
        }
    });
});
