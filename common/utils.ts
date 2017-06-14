import * as fetch from 'isomorphic-fetch';
import * as qs from 'query-string';
import { Promise } from 'thenfail';

import env from '../server/env';

interface Dictionary<T> {
    [key: string]: T
}
type DataType = Dictionary<any>;
interface Response {
    data: DataType,
    meta: {
        code: number;
        msg: string;
        redirect?: string;
    }
}

class ResponseError extends Error {
    constructor(code: number, message: string) {
        super(message);
    }
}

function request({
    method = 'GET',
    url,
    data = {}
}: {
        method?: string;
        url: string;
        data: DataType;
    }): Promise<any> {
    if (method == 'GET') {
        let query = data && qs.stringify(data);
        if (query) {
            url = url + (url.indexOf('?') > -1 ? `&${query}` : `?${query}`);
        }
    }

    return Promise.resolve(
        fetch(url, {
            method: method.toLowerCase(),
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response: any) => {
            return Promise
                .resolve(response.json())
                .catch(() => {
                    throw new Error('网络或服务器错误');
                }) as Promise<Response>;
            ;
        })
            .then((res): Response => {
                if (res.meta && res.meta.code != 0) {
                    console.log(res.meta.msg + ' error code is ' + res.meta.code);

                    throw new Error(res.meta.msg);
                }

                if (res.meta && res.meta.redirect) {
                    window.location.href = res.meta.redirect;
                }

                return res;
            })
    );
}

export const api = {
    get: (url: string, data?: DataType) => {
        return request({
            method: 'GET',
            url,
            data
        })
    },
    post: (url: string, data?: DataType) => {
        return request({
            method: 'POST',
            url,
            data
        })
    }
}

export function correctApiUrl(url: string) {
    if (process.env.NODE_ENV === 'production') {
        return `http://qmin91.com/apis/mobile${url}`;
    } else {
        return `http://localhost:${env.webpack.port}/apis/mobile${url}`;
    }
}
