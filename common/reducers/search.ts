import * as Lodash from "lodash";

import { catBasic } from "../interfaces/cat";
import { AUTO_COMPLETE } from "../actions/search";

export function getSuggestionReducer(state = {}, action: any) {
    switch (action.type) {
        case AUTO_COMPLETE:
            return action.results;
        default:
            return state;
    }
}
