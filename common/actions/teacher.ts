import { Dispatch } from 'redux';

import { api, correctApiUrl } from '../../common/utils';
import apis from '../../common/apisUrl';
import { Role } from '../configs/vars';

import { TeacherBasic, RecommendsResponseBasic } from '../interfaces/teacher';
import { updateSEO } from '../actions/common';

export const FETCH_TEACHER_DETAIL = 'FETCH_TEACHER_DETAIL';
export const ADD_TEACHER = 'ADD_TEACHER';
export const CHANGE_TEACHER = 'CHANGE_TEACHER';
export const ADD_RECOMMEND_TEACHER = 'ADD_RECOMMEND_TEACHER';

export function fetchTeacherDetail({ tid, }: { tid: number, }) {
    return (dispatch: Dispatch<any>) => {
        return api
            .post(correctApiUrl(apis.fetchTeacherDetail), {
                id: Number(tid),
                role: Role.teacher,
            })
            .then(res => {
                const teacher: TeacherBasic = res.data;

                dispatch(changeTeacher(teacher));
                dispatch(addTeacher(teacher));
                dispatch(updateSEO({
                    title: teacher.name,
                    keywords: [teacher.name],
                    description: teacher.intro
                }));
            })
    }
}

function addTeacher(teacher: TeacherBasic) {
    return {
        type: ADD_TEACHER,
        teacher
    }
}

function changeTeacher(teacher: TeacherBasic) {
    return {
        type: CHANGE_TEACHER,
        teacher
    }
}

export function fetchRecommendTeachers({
    currentPage = 1,
    pageSize = 10,
}: {
        currentPage?: number,
        pageSize?: number,
    }) {
    return (dispatch: Dispatch<any>) => {
        return api
            .post(correctApiUrl(apis.fetchRecommendTeachers), {
                page: currentPage,
                pageSize,
            })
            .then(res => {
                dispatch(addRecommendTeachers(<TeacherBasic[]>res.data.recommends));
            })
    }
}

function addRecommendTeachers(recommends: TeacherBasic[]) {
    return {
        type: ADD_RECOMMEND_TEACHER,
        recommends
    }
}