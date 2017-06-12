import { combineReducers } from 'redux';
import {
    LOG_IN,
    LOG_OUT
} from '../actions/index';

function user(state = {}, action) {
    switch (action.type) {
        case LOG_IN:
            return action.user;
        case LOG_OUT:
            return {};
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    user
});

export default rootReducer;