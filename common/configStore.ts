import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducerApp from './reducers/common';

export default function (initState: any) {
    return createStore(reducerApp, initState, applyMiddleware(thunkMiddleware))
}
