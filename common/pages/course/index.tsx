import './index.less';

import * as React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux' ;
import { Dispatch } from 'redux';
import { number, string, array, object } from 'prop-types';

import { fetchCourseDetail } from '../../actions/course';
import { CourseBasic } from '../../interfaces/course';

import fetch from '../../../client/fetch';

class Course extends React.Component<CourseBasic, any> {
    render() {
        return (
            <div id="course">
                <h3>课程名称：{ this.props.name } .... </h3>

            </div>
        )
    }
}
const fetchData = ({ dispatch }: { dispatch: Dispatch<any> }, params: { cid: number }) =>
    dispatch(fetchCourseDetail({ ...params }));

function mapStateToProps(state: any) {
    const courseResponse: CourseBasic = state.course;

    return { ...courseResponse };

}

(Course as any).propTypes = {
    id: number,
    name: string,
    label: string,
    intro: string,
}

const ConnectedComponent = connect(mapStateToProps)(Course as any);

export default fetch(fetchData)(ConnectedComponent);