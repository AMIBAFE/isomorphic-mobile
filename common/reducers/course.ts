import * as Lodash from "lodash";

import { CourseBasic } from "../interfaces/course";
import { CHAGNE_COURSE, ADD_RECOMMEND_COURSE } from "../actions/course";

export function courseReducer(state = {}, action: any) {
    switch (action.type) {
        case CHAGNE_COURSE:
            return action.course;
        default:
            return state;
    }
}

export function recommendCoursesReducer(
    state: CourseBasic[] = [],
    action: {
        type: string;
        recommends: CourseBasic[];
    }
) {
    switch (action.type) {
        case ADD_RECOMMEND_COURSE:
            return action.recommends;
        default:
            return state;
    }
}
