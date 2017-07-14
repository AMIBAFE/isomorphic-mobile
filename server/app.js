import * as express from "express";
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import apiRouter from './api/apiRouter';
import routesUrl from '../common/routesUrl';
import * as logger from 'morgan'
import handleRender from './render';
import env from './env';

const app = express();
const port = env.server.port;
const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
    app.use(logger('dev'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../assets')));
app.use(express.static(path.join(__dirname, '../dist')));

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    next();
});
if (isDevelopment) {
    app.use('/apis/mobile', apiRouter);
}

app.get(routesUrl.teacherHome, handleRender);
app.get(routesUrl.index, handleRender);
app.get(routesUrl.courseDetail, handleRender);
app.get(routesUrl.find, handleRender);
app.get(routesUrl.cats, handleRender);
app.get(routesUrl.user, handleRender);

app.listen(port, err => {
    if (err) {
        console.error(err);
    } else {
        console.info(`the express server has been listened at port: ${port}`)
    }
});