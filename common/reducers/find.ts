import * as Lodash from "lodash";

import { catBasic } from "../interfaces/cat";
import { ADD_FIND_LISTS } from "../actions/find";

// 上一步action里面定义 findLists是一个数组
// 这里的state： any[] = []就应该是一个数组
export function findListsReducer(
    state: any[] = [],
    action: {
        type: string;
        findLists: catBasic[];
    }
) {
    switch (action.type) {
        case ADD_FIND_LISTS:
            return action.findLists;
        default:
            return state;
    }
}
