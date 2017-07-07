import * as Lodash from "lodash";

import { catBasic } from "../interfaces/cat";
import { AUTO_COMPLETE } from "../actions/search";

export function getSuggestionReducer(
    state: any[] = [],
    action: {
        type: string;
        results: catBasic[];
    }
) {
    switch (action.type) {
        case AUTO_COMPLETE:
            return action.results;
        default:
            return state;
    }
}
