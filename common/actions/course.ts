import { Dispatch } from 'redux';

import { api, correctApiUrl } from '../../common/utils';
import apis from '../../common/apisUrl';
import { Role } from '../configs/vars';

import { CourseBasic, RecommendsResponseBasic } from '../interfaces/course'
import { updateSEO } from '../actions/common';

export const CHAGNE_COURSE = 'CHANGE_COURSE';

export function fetchCourseDetail({cid, }: {cid: number}) {
    return (dispatch: Dispatch <any>) => {
        return api                  
            .post(correctApiUrl(apis.fetchCourseDetail), {
                id: Number(cid)
            })
            .then(res => {
                const course: CourseBasic = res.data;
                dispatch(changeCourse(course));
            })
    }
}

function changeCourse(course: CourseBasic) {
    return {
        type: CHAGNE_COURSE,
        course
    }
}

