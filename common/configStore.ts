import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducerApp from './reducers/all';

export default function (initState: any) {
    return createStore(reducerApp, initState, applyMiddleware(thunkMiddleware))
}
