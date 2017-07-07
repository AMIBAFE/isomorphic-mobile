import { Dispatch } from "redux";

import { api, correctApiUrl } from "../../common/utils";
import apis from "../../common/apisUrl";
import { TeacherBasic } from "../interfaces/teacher";
import { updateSEO } from "../actions/common";

export const AUTO_COMPLETE = "AUTO_COMPLETE";
//   .post(correctApiUrl(apis.fetchSuggestion + `?query=${keyword}`))
export function getSuggestion({ keyword }: { keyword: string }) {
    return (dispatch: Dispatch<any>) => {
        return api
            .post(correctApiUrl(apis.fetchSuggestion), {
                keyword: String(keyword)
            })
            .then(res => {
                const results: TeacherBasic = res.data;
                dispatch(getQueryLists(results));
            });
    };
}

function getQueryLists(results: TeacherBasic) {
    return {
        type: "AUTO_COMPLETE",
        results
    };
}
