import { Dispatch } from 'redux';

import { api, correctApiUrl } from '../../common/utils';
import apis from '../../common/apisUrl';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const RECEIVE_USER = 'RECEIVE_USER';
export const FETCH_RECOMMEND = 'FETCH_RECOMMEND';
export const ADD_RECOMMEND = 'ADD_RECOMMEND';

import {
    RecommendBasic,
    RecommendsResponseBasic,
} from '../interfaces/common';
export interface User {
    name: string,
    id: number,
}

export function fetchUser() {
    return (dispatch: Dispatch<any>) => {
        return api
            .post(correctApiUrl(apis.fetchUser))
            .then(res => {
                dispatch(receiveUser(<User>res.data));
            })
    }
}

function receiveUser(user: User) {
    return {
        type: RECEIVE_USER,
        user
    }
}

export function login(user: User) {
    return {
        type: LOG_IN,
        user
    }
}
export function logout() {
    return {
        type: LOG_OUT
    }
}

export function fetchRecommend({
    currentPage = 1,
    pageSize = 10,
    isRecommend = true,
}: {
        currentPage?: number,
        pageSize?: number,
        isRecommend?: boolean,
    }) {
    return (dispatch: Dispatch<any>) => {
        return api
            .post(correctApiUrl(apis.fetchRecommend), {
                page: currentPage,
                pageSize,
                isRecommend,
            })
            .then(res => {
                dispatch(addRecommends(<RecommendsResponseBasic>res.data));
            })
    }
}

function addRecommends(response: RecommendsResponseBasic) {
    return {
        type: ADD_RECOMMEND,
        recommendsResponse: response
    }
}
