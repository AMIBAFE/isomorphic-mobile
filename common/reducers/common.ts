import * as Lodash from "lodash";

import { RecommendBasic, RecommendsResponseBasic } from "../interfaces/common";
import {
    UPDATE_SEO,
    FETCH_RECOMMEND,
    ADD_RECOMMEND,
    RECEIVE_USER,
    LOG_IN,
    LOG_OUT
} from "../actions/common";

const seoInitState = {
    keywords: ["全民教育"],
    description: "全民教育",
    title: "全民教育网移动端官网"
};

export function seoReducer(state = seoInitState, action: any) {
    switch (action.type) {
        case UPDATE_SEO:
            return { ...action.seoInfo };
        default:
            return state;
    }
}

export function userReducer(state = {}, action: any) {
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

export function recommendRolesReducer(
    state: RecommendBasic[] = [],
    action: {
        type: string;
        recommends: RecommendBasic[];
    }
) {
    switch (action.type) {
        case ADD_RECOMMEND:
            return action.recommends;
        default:
            return state;
    }
}
