import './index.less';

import * as React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { number, string, array } from 'prop-types';

import UserLabel from '../user-label';

import { defaultAvatar, Role, PriceUnitId, PriceUnitMap } from '../../configs/vars';
import { TeacherBasic } from '../../interfaces/teacher';
import { CourseBasic } from '../../interfaces/course';

class Course extends React.Component<CourseBasic, any> {
    render() {
        return (
            <Link key={this.props.id} className="course" to={`/course/${this.props.id}`}>
                {this.props.price && <span className="price"><strong>￥{this.props.price || '未设置'}</strong>起/{this.props.priceUnitNum}{this.props.priceUnit || '未设置'}</span>}
                <span className="type">授课方式: {this.props.type || '未设置'}</span>
                <span className="name">{this.props.name}</span>
            </Link>
        )
    }
}

(Course as any).propTypes = {
    id: number.isRequired,
    name: string.isRequired,
    fitAge: string,
    type: string,
    price: number,
    priceUnitNum: number,
    priceUnit: string,
    cats: array,
}

export default class TeacherCard extends React.Component<TeacherBasic, any> {
    render() {
        const teacher = this.props;

        return (
            <li className="profile-card">
                <Link className="profile" to={`/teacher/${teacher.id}`}>
                    <img className="avatar" src={teacher.avatar || defaultAvatar} alt={teacher.name} />
                    <div className="detail">
                        <p>
                            <span className="label-teaching-age">{teacher.teachingAge}年教龄</span>
                            <strong>{teacher.name}</strong>
                        </p>
                        <div className="intro">{teacher.intro || '暂未完善介绍'}</div>
                    </div>
                </Link>
                {teacher.courses && teacher.courses.length &&
                    <div className="course-list">
                        {teacher.courses.map((course, index) => {
                            return (
                                <Course key={index} {...course} />
                            )
                        })}
                    </div>
                }
            </li>
        )
    }
}

(TeacherCard as any).propTypes = {
    id: number.isRequired,
    name: string.isRequired,
    labels: string,
    teachingAge: number,
    avatar: string,
    courses: array,
    shortIntro: string,
    intro: string,
}