import { Dispatch } from "redux";

import { api } from "../../common/utils";
import apis from "../../common/apisUrl";
import { Role } from "../configs/vars";

import { CourseBasic, RecommendsResponseBasic } from "../interfaces/course";
import { updateSEO } from "../actions/common";

export const CHAGNE_COURSE = "CHANGE_COURSE";

export function fetchCourseDetail({ cid }: { cid: number }) {
    return (dispatch: Dispatch<any>) => {
        return api
            .post(apis.fetchCourseDetail, {
                id: Number(cid)
            })
            .then(res => {
                const course: CourseBasic = res.data;
                dispatch(changeCourse(course));
                dispatch(
                    updateSEO({
                        title: course.name,
                        keywords: [course.name].concat(
                            course.cats.reverse().filter(cat => !!cat)
                        ),
                        description: course.intro
                    })
                );
            });
    };
}

function changeCourse(course: CourseBasic) {
    return {
        type: CHAGNE_COURSE,
        course
    };
}
