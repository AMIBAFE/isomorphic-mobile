import './index.less';

import * as React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { number, string, array, object } from 'prop-types';

import { fetchCourseDetail } from '../../actions/course';
import { CourseBasic } from '../../interfaces/course';
import { TeacherProfile } from '../../components/teacher-profile';

import fetch from '../../../client/fetch';

class Course extends React.Component<CourseBasic, any> {
    render() {
        return (
            <div id="course-home">
                <section id="info-part-course">
                    <img src={this.props.cover} alt={this.props.name} />
                    <div className="info-text">
                        <h2>课程名称：{this.props.name}</h2>
                        <p>
                            <span>课程分类：<strong>{this.props.cats}</strong></span>
                            <span>适学年龄：<strong>{this.props.fitAge}</strong></span>
                        </p>
                        <p>
                            <span>课程班制：<strong>{this.props.type}</strong></span>
                            <span>授课方式：
                                {
                            this.props.ways && this.props.ways.map((way, index) => {
                                return <strong key={index}>{way}</strong>
                            })
                        }
                                {/*  {
                                    this.props.way.map(function (wayItem, index) {
                                        return <strong key={index}>{wayItem}</strong>
                                    })
                                }*/}
                            </span>
                        </p>
                        <div className="info-price"><em><i>￥</i>{this.props.price}</em>起/{this.props.priceUnitNum}{this.props.priceUnit}</div>
                    </div>
                </section>
                <section id="intro-part-course" className="main-part">
                    <h2 className="main-title"><strong>课程简介</strong>COURSE INTRODUCTION</h2>
                    <div>{this.props.intro}</div>
                </section>
                <section id="students-part-course" className="main-part">
                    <h2 className="main-title"><strong>对象和目标</strong>STUDENT AND TARGET</h2>
                    <div className="students">
                        <span><i></i></span>
                        <ul>{
                            this.props.fitAgeTags && this.props.fitAgeTags.map((fitAgeItem, index) => {
                                return <li key={index}>{fitAgeItem.label}</li>
                            })
                        }
                        </ul>
                    </div>

                    <div className="targets">
                        <span><i></i></span>
                        <ul>
                            {
                                this.props.targetTags && this.props.targetTags.map((targetItem, index) => {
                                    return <li key={index}>{targetItem.label}</li>
                                })
                            }

                        </ul>
                    </div>

                </section>
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