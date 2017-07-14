import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { number, string, array, object } from "prop-types";
import { CourseBasic } from "../../interfaces/course";

export default class CourseCard extends React.Component<CourseBasic, any> {
    render() {
        const course = { ...this.props };

        return (
            <li className="course-card">
                <Link to={`/course/${course.id}`}>
                    <img src={course.cover} alt={course.name} />
                    <h3>
                        {course.name}
                    </h3>
                    <p>
                        学龄：{course.fitAge || "未设置"} <br />
                        {course.type ? `班制：${course.type || "未设置"}` : ""}
                    </p>
                    {course.price
                        ? <p className="price-info">
                              <strong>￥{course.price || "未设置"}</strong>起/{course.priceUnitNum}
                              {course.priceUnit || "未设置"}
                          </p>
                        : <p className="price-info">查看详情 >></p>}
                </Link>
            </li>
        );
    }
}

(CourseCard as any).propTypes = {
    id: number.isRequired,
    name: string.isRequired,
    fitAge: string,
    type: string,
    price: number,
    priceUnitNum: number,
    priceUnit: string,
    cats: array
};
