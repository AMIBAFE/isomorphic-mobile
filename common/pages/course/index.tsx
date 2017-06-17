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
                <h1>课程页</h1>
                <ul>

                </ul>
            </div>
        )
    }
}
