import { Dispatch } from "redux";

import { api, correctApiUrl } from "../../common/utils";
import apis from "../../common/apisUrl";

import { catBasic } from "../interfaces/cat";
import { updateSEO } from "../actions/common";

export const ADD_HOT_SEARCH_CATS = "ADD_HOT_SEARCH_CATS";

export function fetchHotSearchCats() {
    return (dispatch: Dispatch<any>) => {
        /*return api.post(correctApiUrl(apis.fetchHotSearchCats)).then(res => {
            dispatch(addHotSearchCats(<catBasic[]>res.data));
        });*/
        return api.post(correctApiUrl(apis.fetchHotSearchCats)).then(res => {
            const hotSearchCats: catBasic[] = res.data;
            dispatch(addHotSearchCats(hotSearchCats));
            console.log("action里面的", hotSearchCats);
        });
    };
}

function addHotSearchCats(hotSearchCats: catBasic[]) {
    return {
        type: "ADD_HOT_SEARCH_CATS",
        hotSearchCats
    };
}
