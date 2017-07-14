import * as Lodash from "lodash";

import { catBasic } from "../interfaces/cat";

import { ADD_HOT_SEARCH_CATS } from "../actions/cats";
// 2. 它是一个数组
// 这里的state： any[] = []就应该是一个数组
export function hotSearchReducer(
    state: any[] = [],
    action: {
        type: string;
        hotSearchCats: catBasic[];
    }
) {
    switch (action.type) {
        case ADD_HOT_SEARCH_CATS:
            return action.hotSearchCats;
        default:
            return state;
    }
}
