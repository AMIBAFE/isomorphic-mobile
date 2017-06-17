import * as Lodash from 'lodash';

import {
    RecommendBasic,
    RecommendsResponseBasic,
} from '../interfaces/common';
import {
    UPDATE_SEO,
    FETCH_RECOMMEND,
    ADD_RECOMMEND,

    RECEIVE_USER,
    LOG_IN,
    LOG_OUT
} from '../actions/common';

export function seo(state = {}, action: any) {
    switch (action.type) {
        case UPDATE_SEO:
            return { ...action.seoInfo };
        default:
            return state;
    }
}

export function user(state = {}, action: any) {
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