import * as Lodash from 'lodash';

import {
    TeacherDictionary,
    TeacherBasic,
    RecommendsResponseBasic,
} from '../interfaces/teacher';
import {
    ADD_TEACHER,
    CHANGE_TEACHER,
    ADD_RECOMMEND_TEACHER,
} from '../actions/teacher';

export function teacher(state = {}, action: any) {
    switch (action.type) {
        case CHANGE_TEACHER:
            return action.teacher;
        default:
            return state;
    }
}

export function teachers(state: TeacherDictionary<TeacherBasic> = {}, action: {
    type: string;
    teacher: TeacherBasic;
}) {
    switch (action.type) {
        case ADD_TEACHER:
            const teacher = action.teacher;
            const id = teacher.id;
            const tObject: any = {};
            tObject[id] = teacher;

            return Lodash.assign({}, state, tObject)
        default:
            return state;
    }
}

export function recommendTeachers(state: TeacherBasic[] = [], action: {
    type: string;
    recommends: TeacherBasic[];
}) {
    switch (action.type) {
        case ADD_RECOMMEND_TEACHER:
            return [...state, ...action.recommends];
        default:
            return state;
    }
}

