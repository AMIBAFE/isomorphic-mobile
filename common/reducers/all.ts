import { combineReducers } from 'redux';

import {
    seo,
    user,
} from './common';
import {
    teacher,
    teachers,
    recommendTeachers,
} from './teacher';

import { course } from './course';

const rootReducer = combineReducers({
    seo,
    user,
    teacher,
    teachers,
    recommendTeachers,
    course
});

export default rootReducer;