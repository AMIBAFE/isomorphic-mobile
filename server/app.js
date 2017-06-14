import * as express from "express";
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import apiRouter from './api/apiRouter';
import * as logger from 'morgan'
import handleRender from './render';
import env from './env';

const app = express();
const port = env.server.port;

if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../assets')));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../dist')));

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    next();
});
if (process.env.NODE_ENV === 'development') {
    app.use('/apis/mobile', apiRouter);
}
app.use('*', handleRender);

app.listen(port, err => {
    if (err) {
        console.error(err);
    } else {
        console.info(`the express server has been listened at port: ${port}`)
    }
});