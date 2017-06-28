import * as Lodash from 'lodash';

import { CourseBasic } from '../interfaces/course';
import { CHAGNE_COURSE } from '../actions/course';


export function courseReducer(state = {}, action: any) {
    switch (action.type) {
        case CHAGNE_COURSE:
            return action.course;
        default:
            return state;
    }
}