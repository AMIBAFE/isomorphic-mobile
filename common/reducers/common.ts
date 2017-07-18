import * as Lodash from "lodash";

import {
    RecommendRoleBasic,
    HotRoleBasic,
    RecommendsResponseBasic
} from "../interfaces/common";
import { CourseBasic } from "../interfaces/course";
import {
    UPDATE_SEO,
    SWITCH_HOME_ROLE_TAB,
    SWITCH_HOME_COURSE_TAB,
    UPDATE_RECOMMEND_ROLES,
    UPDATE_RECOMMEND_COURSES,
    UPDATE_HOT_ROLES,
    UPDATE_HOT_COURSES,
    RECEIVE_USER,
    LOG_IN,
    LOG_OUT
} from "../actions/common";

const seoInitState = {
    keywords: ["全民教育"],
    description: "全民教育",
    title: "全民教育网移动端官网"
};

export function pageReducer(
    state = { homeRoleTabIndex: 0, homeCourseTabIndex: 0 },
    action: any
) {
    switch (action.type) {
        case SWITCH_HOME_ROLE_TAB:
            return { ...state, homeRoleTabIndex: action.tabIndex };
        case SWITCH_HOME_COURSE_TAB:
            return { ...state, homeCourseTabIndex: action.tabIndex };
        default:
            return state;
    }
}

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
    state: RecommendRoleBasic[] = [],
    action: {
        type: string;
        recommends: RecommendRoleBasic[];
    }
) {
    switch (action.type) {
        case UPDATE_RECOMMEND_ROLES:
            return action.recommends;
        default:
            return state;
    }
}

export function recommendCoursesReducer(
    state: CourseBasic[] = [],
    action: {
        type: string;
        recommends: CourseBasic[];
    }
) {
    switch (action.type) {
        case UPDATE_RECOMMEND_COURSES:
            return action.recommends;
        default:
            return state;
    }
}

export function hotRolesReducer(
    state: HotRoleBasic[] = [],
    action: {
        type: string;
        hots: HotRoleBasic[];
    }
) {
    switch (action.type) {
        case UPDATE_HOT_ROLES:
            return action.hots;
        default:
            return state;
    }
}

export function hotCoursesReducer(
    state: CourseBasic[] = [],
    action: {
        type: string;
        hots: HotRoleBasic[];
    }
) {
    switch (action.type) {
        case UPDATE_HOT_COURSES:
            return action.hots;
        default:
            return state;
    }
}
