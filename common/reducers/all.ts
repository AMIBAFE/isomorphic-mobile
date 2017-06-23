import { combineReducers } from 'redux';

import {
    seoReducer,
    userReducer,
} from './common';
import {
    teacherReducer,
    teachersReducer,
    recommendTeachersReducer,
} from './teacher';

const rootReducer = combineReducers({
    seo: seoReducer,
    user: userReducer,
    teacher: teacherReducer,
    teachers: teachersReducer,
    recommendTeachers: recommendTeachersReducer,
});

export default rootReducer;