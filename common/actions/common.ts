import { Dispatch } from "redux";

import { api, correctApiUrl } from "../../common/utils";
import apis from "../../common/apisUrl";

export const UPDATE_SEO = "UPDATE_SEO";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const RECEIVE_USER = "RECEIVE_USER";
export const FETCH_RECOMMEND = "FETCH_RECOMMEND";
export const ADD_RECOMMEND = "ADD_RECOMMEND";

import { RecommendBasic, RecommendsResponseBasic } from "../interfaces/common";
export interface User {
    id: number;
    name: string;
    account: string;
    token: string;
    expires: string;
}

export function fetchUser() {
    return (dispatch: Dispatch<any>) => {
        return api.post(correctApiUrl(apis.fetchUser)).then(res => {
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
        return api
            .post(correctApiUrl(apis.login), { account, password })
            .then(res => {
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

export function fetchRecommendRoles({
    currentPage = 1,
    pageSize = 10
}: {
    currentPage?: number;
    pageSize?: number;
}) {
    return (dispatch: Dispatch<any>) => {
        return api
            .post(correctApiUrl(apis.fetchRecommendRoles), {
                page: currentPage,
                pageSize
            })
            .then(res => {
                dispatch(
                    addRecommendRoles(<RecommendBasic[]>res.data.recommends)
                );
            });
    };
}

function addRecommendRoles(recommends: RecommendBasic[]) {
    return {
        type: ADD_RECOMMEND,
        recommends
    };
}
