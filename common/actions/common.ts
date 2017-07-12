import Promise from "thenfail";
import { Dispatch } from "redux";

import { api } from "../../common/utils";
import apis from "../../common/apisUrl";

export const UPDATE_SEO = "UPDATE_SEO";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_RECOMMEND_ROLES = "UPDATE_RECOMMEND_ROLES";
export const UPDATE_RECOMMEND_COURSES = "UPDATE_RECOMMEND_COURSES";
export const UPDATE_HOT_ROLES = "UPDATE_HOT_ROLES";
export const UPDATE_HOT_COURSES = "UPDATE_HOT_COURSES";

import {
    RecommendRoleBasic,
    HotRoleBasic,
    RecommendsResponseBasic
} from "../interfaces/common";
import { CourseBasic } from "../interfaces/course";
export interface User {
    id: number;
    name: string;
    account: string;
    token: string;
    expires: string;
}

export function fetchUser() {
    return (dispatch: Dispatch<any>) => {
        return api.post(apis.fetchUser).then(res => {
            dispatch(receiveUser(<User>res.data));
        });
    };
}

function receiveUser(user: User) {
    return {
        type: RECEIVE_USER,
        user
    };
}

export function login({
    account,
    password
}: {
    account: string;
    password: string;
}) {
    return (dispatch: Dispatch<any>) => {
        return api.post(apis.login, { account, password }).then(res => {
            const user: User = res.data;

            localStorage.setItem("qm91_token_expires", user.expires);
            localStorage.setItem("qm91_token", user.token);

            dispatch(receiveUser(<User>res.data));
        });
    };
}
export function logout() {
    return {
        type: LOG_OUT
    };
}

export function updateSEO({
    title,
    keywords,
    description
}: {
    title: string;
    keywords: string[];
    description: string;
}) {
    return {
        type: UPDATE_SEO,
        seoInfo: { title, keywords, description }
    };
}

export function fetchRecommendRoles() {
    return (dispatch: Dispatch<any>) => {
        return api.post(apis.fetchRecommendRoles).then(res => {
            dispatch(updateRecommendRoles(<RecommendRoleBasic[]>res.data));
        });
    };
}

export function fetchHotRoles() {
    return (dispatch: Dispatch<any>) => {
        return api.post(apis.fetchHotRoles).then(res => {
            dispatch(updateHotRoles(<HotRoleBasic[]>res.data));
        });
    };
}

export function fetchRecommendCourses() {
    return (dispatch: Dispatch<any>) => {
        return api.post(apis.fetchRecommendCourses).then(res => {
            dispatch(updateRecommendCourses(<CourseBasic[]>res.data));
        });
    };
}

export function fetchHotCourses() {
    return (dispatch: Dispatch<any>) => {
        return api.post(apis.fetchHotCourses).then(res => {
            dispatch(updateHotCourses(<CourseBasic[]>res.data));
        });
    };
}

export function fetchHomePageData() {
    return (dispatch: Dispatch<any>) => {
        let fetchRecommendRolesPromise = api.post(apis.fetchRecommendRoles);
        let fetchHotRolesPromise = api.post(apis.fetchHotRoles);
        let fetchRecommendCoursesPromise = api.post(apis.fetchRecommendCourses);
        let fetchHotCoursesPromise = api.post(apis.fetchHotCourses);

        Promise.all([
            fetchRecommendRolesPromise,
            fetchHotRolesPromise,
            fetchRecommendCoursesPromise,
            fetchHotCoursesPromise
        ]).then(([res1, res2, res3, res4]) => {
            dispatch(updateRecommendRoles(res1.data));
            dispatch(updateHotRoles(res2.data));
            dispatch(updateRecommendCourses(res3.data));
            dispatch(updateHotCourses(res4.data));
        });
    };
}

function updateRecommendRoles(recommends: RecommendRoleBasic[]) {
    return {
        type: UPDATE_RECOMMEND_ROLES,
        recommends
    };
}

function updateHotRoles(hots: HotRoleBasic[]) {
    return {
        type: UPDATE_HOT_ROLES,
        hots
    };
}

function updateRecommendCourses(recommends: CourseBasic[]) {
    return {
        type: UPDATE_RECOMMEND_COURSES,
        recommends
    };
}

function updateHotCourses(hots: CourseBasic[]) {
    return {
        type: UPDATE_HOT_COURSES,
        hots
    };
}
