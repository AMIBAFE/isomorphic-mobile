import './index.less';

import * as React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { number, string, array } from 'prop-types';

import { defaultAvatar, PriceUnitId, PriceUnitMap } from '../../configs/vars';
import { TeacherBasic } from '../../interfaces/teacher';
import { CourseBasic } from '../../interfaces/course';

class Course extends React.Component<CourseBasic, any> {
    render() {
        return (
            <Link to={`/course/{ this.props.id }`} key={this.props.id}>
                <span className="teacher-type">
                    <i className="iconfont icon-cat-1"></i>
                    <em>课程类型：{this.props.type || '未设置'}</em>
                </span>
                <span className="teacher-price">
                    <i>{this.props.name}</i>
                    {this.props.price && <span className="price"><strong className="teacher-price-num">￥{this.props.price || '未设置'}</strong>起/{this.props.priceUnitNum}{this.props.priceUnit || '未设置'}</span>}
                </span>
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

export default class TeacherProfile extends React.Component<TeacherBasic, any> {
    render() {
        const teacher = this.props;
        return (
            <li className="teacher-item">
                <Link to={`/teacher/{ teacher.id }`} className="teacher-top clearfix">
                    <a href="javascript:;" className="teacher-avatar col-l">
                        <img src={teacher.avatar || defaultAvatar} alt={teacher.name} />
                    </a>
                    <div className="teacher-info">
                        <p className="teacher-name clearfix">
                            <span className="teacher-mark">{teacher.name}<i className="teacher-icon">顶</i></span>
                            <span className="teaching-age col-r">{teacher.teachingAge}年教龄</span>
                        </p>
                        <p className="teacher-intro">
                            {teacher.intro || '暂未完善介绍'}
                        </p>
                    </div>
                </Link>
                {
                    teacher.courses && teacher.courses.length &&
                    <div className="teacher-bot">
                        {
                            teacher.courses.map((course, index) => {
                                return (
                                    <Course key={index}{...course} />
                                )
                            })
                        }
                    </div>
                }
            </li>
        )
    }
}

(TeacherProfile as any).propTypes = {
    id: number.isRequired,
    name: string.isRequired,
    teachingAge: number,
    avatar: string,
    courses: array,
    intro: string,
}