import { Dispatch } from "redux";

import { api, correctApiUrl } from "../../common/utils";
import apis from "../../common/apisUrl";

import { catBasic } from "../interfaces/cat";
import { updateSEO } from "../actions/common";

export const ADD_FIND_LISTS = "ADD_FIND_LISTS";
// 导出 fetchFindLists
export function fetchFindLists() {
    return (dispatch: Dispatch<any>) => {
        /*与下方的含义一样  只是写法不同而已
        return api.post(correctApiUrl(apis.fetchFindLists)).then(res => {
            dispatch(addFindLists(<findLists[]>res.data));
        });
        */
        return api.post(correctApiUrl(apis.fetchFindLists)).then(res => {
            const findLists: catBasic[] = res.data;
            dispatch(addFindLists(findLists));
        });
    };
}

// 内部的addFindLists()方法
function addFindLists(findLists: catBasic[]) {
    return {
        type: "ADD_FIND_LISTS",
        findLists
    };
}
