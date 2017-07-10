import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { number, string, array, object } from "prop-types";

import { defaultAvatar } from "../../configs/vars";
import { fetchTeacherDetail } from "../../actions/teacher";
import { TeacherBasic } from "../../interfaces/teacher";

import CourseCard from "../../components/course-card";
import fetch from "../../../client/fetch";

class Teacher extends React.Component<TeacherBasic, any> {
    render() {
        return (
            <div id="teacher-home">
                <section className="info-part">
                    <img
                        src={this.props.avatar || defaultAvatar}
                        alt={this.props.name}
                    />
                    <div>
                        <h1>
                            <strong>
                                {this.props.name}
                            </strong>
                            {this.props.labels}
                        </h1>
                        <p>
                            {this.props.shortIntro}
                        </p>
                        <ul>
                            <li>
                                <span className="label">全部课程：</span>
                                <span className="courses">
                                    {this.props.courses &&
                                        this.props.courses.map(
                                            (course, index) => {
                                                return (
                                                    <span key={index}>
                                                        {
                                                            course.cats[
                                                                course.cats
                                                                    .length - 1
                                                            ]
                                                        }
                                                    </span>
                                                );
                                            }
                                        )}
                                </span>
                            </li>
                            <li>
                                教学年龄：<strong>{this.props.teachingAge}年</strong>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="course-part">
                    <h2 className="main-title">
                        <strong>全部课程</strong>ALL COURSE
                    </h2>
                    <ul>
                        {this.props.courses &&
                            this.props.courses.map((course, index) => {
                                return (
                                    <CourseCard key={course.id} {...course} />
                                );
                            })}
                    </ul>
                </section>
                <section className="intro-part">
                    <h2 className="main-title">
                        <strong>教师简介</strong>TEACHER INTRODUCTION
                    </h2>
                    <div>
                        {this.props.intro}
                    </div>
                </section>
            </div>
        );
    }
}

const fetchData = (
    { dispatch }: { dispatch: Dispatch<any> },
    params: { tid: number }
) => dispatch(fetchTeacherDetail({ ...params }));

//将state.teacherResponse绑定到props的counter

function mapStateToProps(state: any) {
    const teacherResponse: TeacherBasic = state.teacher;

    return { ...teacherResponse };
}

(Teacher as any).propTypes = {
    id: number,
    name: string,
    labels: string,
    teachingAge: number,
    avatar: string,
    courses: array,
    shortIntro: string,
    intro: string
};

const ConnectedComponent = connect(mapStateToProps)(Teacher as any);

export default fetch(fetchData)(ConnectedComponent);
