import { TeacherBasic } from "../interfaces/teacher";
import {
    CHANGE_STUDIO,
    UPDATE_STUDIO_COURSES,
    UPDATE_STUDIO_HOME_DATA,
    UPDATE_STUDIO_TEACHER_TEAM
} from "../actions/studio";

export function studioReducer(
    state = {
        id: 0,
        banner: "",
        intro: "",
        notices: <any[]>null
    },
    action: any
) {
    switch (action.type) {
        case CHANGE_STUDIO:
            return action.studio;
        default:
            return state;
    }
}

export function studioCoursesReducer(state = <any[]>[], action: any) {
    switch (action.type) {
        case UPDATE_STUDIO_COURSES:
            return action.courses;
        default:
            return state;
    }
}

export function studioHomeDataReducer(state = {}, action: any) {
    switch (action.type) {
        case UPDATE_STUDIO_HOME_DATA:
            return action.data;
        default:
            return state;
    }
}

export function studioTeacherTeamReducer(
    state = <TeacherBasic[]>[],
    action: any
) {
    switch (action.type) {
        case UPDATE_STUDIO_TEACHER_TEAM:
            return action.teachers;
        default:
            return state;
    }
}
