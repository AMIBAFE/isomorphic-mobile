import { combineReducers } from "redux";

import { seoReducer, userReducer } from "./common";
import {
    teacherReducer,
    teachersReducer,
    recommendTeachersReducer
} from "./teacher";

import { courseReducer } from "./course";
import { hotSearchReducer } from "./cat";
// 引入依赖
import { findListsReducer } from "./find";

const rootReducer = combineReducers({
    seo: seoReducer,
    user: userReducer,
    teacher: teacherReducer,
    teachers: teachersReducer,
    recommendTeachers: recommendTeachersReducer,
    course: courseReducer,
    hotSearchCats: hotSearchReducer,
    // combinde
    findLists: findListsReducer
});

export default rootReducer;
