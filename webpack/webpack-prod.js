import ora from 'ora';
import chalk from 'chalk';
import rm from 'rimraf';
import * as path from 'path';

import webpack from 'webpack';
import merge from 'webpack-merge';
import webpackConfig from './webpack.config';
import env from '../server/env';

const port = env.server.port;
const distPath = path.join(__dirname, '../assets/dist');
const spinner = ora('webpack working');
spinner.start();

const prodWebpackConfig = merge(webpackConfig, {
    output: {
        publicPath: '/dist/',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
    ],
});

rm(distPath, err => {
    if (err) throw err;

    webpack(prodWebpackConfig, (err) => {
        spinner.stop();

        if (err) {
            console.log(chalk.red('fail! \n' + err));
        } else {
            console.log(chalk.green('done!'));
        }
    });
})
