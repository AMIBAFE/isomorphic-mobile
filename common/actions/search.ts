import { Dispatch } from "redux";

import { api, correctApiUrl } from "../../common/utils";
import apis from "../../common/apisUrl";
import { catBasic } from "../interfaces/cat";
import { updateSEO } from "../actions/common";

export const AUTO_COMPLETE = "AUTO_COMPLETE";
//   .post(correctApiUrl(apis.fetchSuggestion + `?query=${keyword}`))
export function fetchSuggestion(keyword: string) {
    return (dispatch: Dispatch<any>) => {
        return api.post(correctApiUrl(apis.fetchSuggestion)).then(res => {
            const results: catBasic[] = res.data;
            dispatch(getQueryLists(keyword, results));
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
