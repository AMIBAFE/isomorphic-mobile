require('ts-node').register();

const Webpack_isomorphic_tools = require('webpack-isomorphic-tools');
const project_base_path = require('path').join(__dirname, '..');
const config = require('../build/webpack-isomorphic-tools-configuration');

global.webpack_isomorphic_tools = new Webpack_isomorphic_tools(config)
    .server(project_base_path)
    .then(() => {
        try {
            return require('./app');
        } catch (e) {
            console.log(e);
        }
    });
