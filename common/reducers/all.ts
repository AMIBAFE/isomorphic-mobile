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

const rootReducer = combineReducers({
    seo,
    user,
    teacher,
    teachers,
    recommendTeachers,
});

export default rootReducer;