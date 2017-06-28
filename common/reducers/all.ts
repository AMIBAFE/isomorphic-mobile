import { combineReducers } from "redux";

import { seoReducer, userReducer } from "./common";
import {
    teacherReducer,
    teachersReducer,
    recommendTeachersReducer
} from "./teacher";

import { courseReducer } from "./course";
import { hotSearchReducer } from "./cat";

const rootReducer = combineReducers({
    seo: seoReducer,
    user: userReducer,
    teacher: teacherReducer,
    teachers: teachersReducer,
    recommendTeachers: recommendTeachersReducer,
    course: courseReducer,
    hotSearch: hotSearchReducer
});

export default rootReducer;
