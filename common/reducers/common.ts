import { combineReducers } from 'redux';
import * as Lodash from 'lodash';

import {
    RecommendBasic,
    RecommendsResponseBasic,
} from '../interfaces/common';
import {
    FETCH_RECOMMEND,
    ADD_RECOMMEND,

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

function recommends(state: RecommendsResponseBasic = {
    currentPage: 0,
    totalPages: 1,
    pageSize: 10,
    recommends: []
}, action: any) {
    switch (action.type) {
        case ADD_RECOMMEND:
            const res: RecommendsResponseBasic = action.recommendsResponse;
            // 或后面的数据是为了兼容之前老的数据接口
            return Lodash.assign({}, state, {
                currentPage: res.currentPage || res.page,
                totalPages: res.totalPages || res.page,
                pageSize: res.pageSize || res.perPage,
                recommends: state.recommends.concat(res.recommends || res.list),
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    user,
    recommends
});

export default rootReducer;