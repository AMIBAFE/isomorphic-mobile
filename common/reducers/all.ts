import { combineReducers } from "redux";

import {
    pageReducer,
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
    studioTeacherTeamReducer,
    studioMediasReducer
} from "./studio";
import { kindergartenReducer } from "./kindergarten";

import { courseReducer } from "./course";
import { hotSearchReducer } from "./cat";
import { findListsReducer } from "./find";
import { getSuggestionReducer } from "./search";

const rootReducer = combineReducers({
    page: pageReducer,
    seo: seoReducer,
    user: userReducer,

    studio: studioReducer,
    studioHomeData: studioHomeDataReducer,
    studioCourses: studioCoursesReducer,
    studioTeachers: studioTeacherTeamReducer,
    studioMedias: studioMediasReducer,

    teacher: teacherReducer,
    teachers: teachersReducer,

    recommendRoles: recommendRolesReducer,
    recommendCourses: recommendCoursesReducer,
    hotRoles: hotRolesReducer,
    hotCourses: hotCoursesReducer,

    course: courseReducer,
    kindergarten: kindergartenReducer,

    hotSearchCats: hotSearchReducer,
    findLists: findListsReducer,
    searchResults: getSuggestionReducer
});

export default rootReducer;
