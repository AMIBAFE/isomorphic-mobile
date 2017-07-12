import { Dispatch } from "redux";

import { api } from "../../common/utils";
import apis from "../../common/apisUrl";

import {
    RecommendRoleBasic,
    RecommendsResponseBasic
} from "../interfaces/common";
import { TeacherBasic } from "../interfaces/teacher";
import { updateSEO } from "../actions/common";

export const FETCH_TEACHER_DETAIL = "FETCH_TEACHER_DETAIL";
export const ADD_TEACHER = "ADD_TEACHER";
export const CHANGE_TEACHER = "CHANGE_TEACHER";
export const ADD_RECOMMEND_TEACHER = "ADD_RECOMMEND_TEACHER";

export function fetchTeacherDetail({ tid }: { tid: number }) {
    return (dispatch: Dispatch<any>) => {
        return api
            .post(apis.fetchTeacherDetail, { id: Number(tid) })
            .then(res => {
                const teacher: TeacherBasic = res.data;

                dispatch(changeTeacher(teacher));
                dispatch(addTeacher(teacher));
                dispatch(
                    updateSEO({
                        title: teacher.name,
                        keywords: [teacher.name],
                        description: teacher.intro
                    })
                );
            });
    };
}

function addTeacher(teacher: TeacherBasic) {
    return {
        type: ADD_TEACHER,
        teacher
    };
}

function changeTeacher(teacher: TeacherBasic) {
    return {
        type: CHANGE_TEACHER,
        teacher
    };
}
