import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { number, string, array, bool } from "prop-types";

import { defaultAvatar, PriceUnitId, PriceUnitMap } from "../../configs/vars";
import { RoleCardBasic } from "../../interfaces/common";
import { CourseBasic } from "../../interfaces/course";

class Course extends React.Component<CourseBasic, any> {
    render() {
        return (
            <Link
                key={this.props.id}
                className="role-course"
                to={`/course/${this.props.id}`}
            >
                {this.props.price &&
                    <span className="role-price">
                        <strong>￥{this.props.price || "未设置"}</strong>起/{this.props.priceUnitNum}
                        {this.props.priceUnit || "未设置"}
                    </span>}
                <span className="role-type">
                    <i className="iconfont icon-cat-1" />
                    <em>
                        课程类型：{this.props.type || "未设置"}
                    </em>
                </span>
                <span className="role-course-name">
                    {this.props.name}
                </span>
            </Link>
        );
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
    cats: array
};

export default class RoleProfile extends React.Component<RoleCardBasic, any> {
    render() {
        const {
            id,
            avatar,
            name,
            role,
            isHot,
            teachingAge,
            intro,
            courses
        } = this.props;
        const roleRoute = role === 4 ? "studio" : "teacher";
        return (
            <li className="role-profile">
                <Link to={`/${roleRoute}/${id}`} className="role-top">
                    <span className="role-avatar">
                        <img src={avatar || defaultAvatar} alt={name} />
                    </span>
                    <div className="role-info">
                        <p className="role-name">
                            <span className="role-mark">
                                {name}
                                {isHot && <i className="role-icon">顶</i>}
                            </span>
                            {teachingAge &&
                                <span className="teaching-age">
                                    {teachingAge}年教龄
                                </span>}
                        </p>
                        <p className="role-intro">
                            {intro || "暂未完善介绍"}
                        </p>
                    </div>
                </Link>
                {courses &&
                    courses.length &&
                    <div className="role-bot">
                        {courses.map((course, index) => {
                            return <Course key={index} {...course} />;
                        })}
                    </div>}
            </li>
        );
    }
}

(RoleProfile as any).propTypes = {
    id: number.isRequired,
    role: number,
    name: string.isRequired,
    teachingAge: number,
    avatar: string,
    courses: array,
    intro: string,
    isHot: bool
};
