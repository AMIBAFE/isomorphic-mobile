import { Dispatch } from "redux";

import { api, correctApiUrl } from "../../common/utils";
import apis from "../../common/apisUrl";

import { updateSEO } from "../actions/common";

import { StudioBasic, StudioHomeDataBasic } from "../interfaces/studio";
import { CourseBasic } from "../interfaces/course";
import { TeacherBasic } from "../interfaces/teacher";

export const FETCH_STUDIO_DETAIL = "FETCH_STUDIO_DETAIL";
export const FETCH_STUDIO_COURSES = "FETCH_STUDIO_COURSES";
export const CHANGE_STUDIO = "CHANGE_STUDIO";
export const UPDATE_STUDIO_COURSES = "UPDATE_STUDIO_COURSES";
export const UPDATE_STUDIO_HOME_DATA = "UPDATE_STUDIO_HOME_DATA";
export const UPDATE_STUDIO_TEACHER_TEAM = "UPDATE_STUDIO_TEACHER_TEAM";

export function fetchStudioInfo({ sid }: { sid: number }) {
    return (dispatch: Dispatch<any>) => {
        return api
            .post(correctApiUrl(apis.fetchStudioInfo), { id: Number(sid) })
            .then(res => {
                const studio: StudioBasic = res.data;

                dispatch(changeStudio(studio));
                dispatch(
                    updateSEO({
                        title: studio.name,
                        keywords: [studio.name],
                        description: studio.intro
                    })
                );
            });
    };
}

export function fetchStudioHomeData({ sid }: { sid: number }) {
    return (dispatch: Dispatch<any>) => {
        return api
            .post(correctApiUrl(apis.fetchStudioHomeData), { id: Number(sid) })
            .then(res => {
                const data: StudioHomeDataBasic = res.data;

                dispatch(updateStudioHomeData(data));
            });
    };
}

export function fetchStudioCourses({ sid }: { sid: number }) {
    return (dispatch: Dispatch<any>) => {
        return api
            .post(correctApiUrl(apis.fetchStudioCourses), { id: Number(sid) })
            .then(res => {
                const courses: CourseBasic[] = res.data;

                dispatch(updateStudioCourses(courses));
                dispatch(
                    updateSEO({
                        title: "全部机构课程三级类目",
                        keywords: ["三级类目"],
                        description: "全部机构课程三级类目"
                    })
                );
            });
    };
}

export function fetchStudioTeachers({ sid }: { sid: number }) {
    return (dispatch: Dispatch<any>) => {
        return api
            .post(correctApiUrl(apis.fetchStudioTeachers), { id: Number(sid) })
            .then(res => {
                const teachers: TeacherBasic[] = res.data;

                dispatch(updateStudioTeacherTeam(teachers));
                dispatch(
                    updateSEO({
                        title: "师资团队",
                        keywords: ["机构名字"],
                        description: "机构名字"
                    })
                );
            });
    };
}

function changeStudio(studio: StudioBasic) {
    return {
        type: CHANGE_STUDIO,
        studio
    };
}

function updateStudioCourses(courses: CourseBasic[]) {
    return {
        type: UPDATE_STUDIO_COURSES,
        courses
    };
}

function updateStudioHomeData(data: StudioHomeDataBasic) {
    return {
        type: UPDATE_STUDIO_HOME_DATA,
        data
    };
}

function updateStudioTeacherTeam(teachers: TeacherBasic[]) {
    return {
        type: UPDATE_STUDIO_TEACHER_TEAM,
        teachers
    };
}
