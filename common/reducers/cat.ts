import * as Lodash from "lodash";

import { HotSearchCatBasic } from "../interfaces/cat";

import { ADD_HOT_SEARCH_CATS } from "../actions/cats";

export function hotSearchReducer(
    state: any = {},
    action: {
        type: string;
        hotSearchCats: HotSearchCatBasic;
    }
) {
    switch (action.type) {
        case ADD_HOT_SEARCH_CATS:
            return action.hotSearchCats;
        default:
            return state;
    }
}
