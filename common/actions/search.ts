import { Dispatch } from "redux";

import { api, correctApiUrl } from "../../common/utils";
import apis from "../../common/apisUrl";

import { updateSEO } from "../actions/common";

export const AUTO_COMPLETE = "AUTO_COMPLETE";
//   .post(correctApiUrl(apis.fetchSuggestion + `?query=${keyword}`))
export function fetchSuggestion(keyword) {
    return (dispatch: Dispatch<any>) => {
        return api.post(correctApiUrl(apis.fetchSuggestion)).then(res => {
            const results: catBasic[] = res.data;
            dispatch(getQueryLists(results));
        });
    };
}

function getQueryLists(keyword: string, results: catBasic[]) {
    return {
        type: "AUTO_COMPLETE",
        keyword,
        results
    };
}
