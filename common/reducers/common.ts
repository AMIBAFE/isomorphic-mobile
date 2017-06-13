import { combineReducers } from 'redux';
import {
    RECEIVE_USER,
    LOG_IN,
    LOG_OUT
} from '../actions/common';

function user(state = {}, action: any) {
    switch (action.type) {
        case RECEIVE_USER:
            return action.user;
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