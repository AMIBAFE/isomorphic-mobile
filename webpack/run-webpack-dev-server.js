require('ts-node').register({
    compiler: 'typescript'
});
global.__DEVELOPMENT__ = true;
require('./webpack-dev-server');