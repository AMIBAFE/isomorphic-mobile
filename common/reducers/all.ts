import { combineReducers } from "redux";

import { seoReducer, userReducer } from "./common";
import {
    teacherReducer,
    teachersReducer,
    recommendTeachersReducer
} from "./teacher";

import { courseReducer } from "./course";
import { hotSearchReducer } from "./cat";
import { findListsReducer } from "./find";
import { getSuggestionReducer } from "./search";

const rootReducer = combineReducers({
    seo: seoReducer,
    user: userReducer,
    teacher: teacherReducer,
    teachers: teachersReducer,
    recommendTeachers: recommendTeachersReducer,
    course: courseReducer,
    hotSearchCats: hotSearchReducer,
    findLists: findListsReducer,
    searchResults: getSuggestionReducer
});

export default rootReducer;
