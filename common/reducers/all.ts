import { combineReducers } from "redux";

import {
    seoReducer,
    userReducer,
    recommendRolesReducer,
    recommendCoursesReducer,
    hotRolesReducer,
    hotCoursesReducer
} from "./common";
import { teacherReducer, teachersReducer } from "./teacher";
import {
    studioReducer,
    studioCoursesReducer,
    studioHomeDataReducer,
    studioTeacherTeamReducer
} from "./studio";

import { courseReducer } from "./course";
import { hotSearchReducer } from "./cat";
import { findListsReducer } from "./find";
import { getSuggestionReducer } from "./search";

const rootReducer = combineReducers({
    seo: seoReducer,
    user: userReducer,
    studio: studioReducer,
    studioHomeData: studioHomeDataReducer,
    studioCourses: studioCoursesReducer,
    studioTeachers: studioTeacherTeamReducer,
    teacher: teacherReducer,
    teachers: teachersReducer,
    recommendRoles: recommendRolesReducer,
    recommendCourses: recommendCoursesReducer,
    hotRoles: hotRolesReducer,
    hotCourses: hotCoursesReducer,
    course: courseReducer,
    hotSearchCats: hotSearchReducer,
    findLists: findListsReducer,
    searchResults: getSuggestionReducer
});

export default rootReducer;
