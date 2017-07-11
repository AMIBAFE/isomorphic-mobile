import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { string, array, object } from "prop-types";
import fetch from "../../../../client/fetch";

import { CourseBasic } from "../../../interfaces/course";
import { StudioBasic, StudioHomeDataBasic } from "../../../interfaces/studio";
import { fetchStudioInfo, fetchStudioCourses } from "../../../actions/studio";

import Notices from "../../../components/studio/notice";
import Banner from "../../../components/studio/banner";
import Entrance from "../../../components/studio/entrance";
import CourseCard from "../../../components/course-card";
import Footer from "../../../components/footer";
import ContactBar from "../../../components/studio/contact-bar";
import StudioAddress from "../../../components/studio/address";

class CourseList extends React.Component<{ courses: CourseBasic[] }, any> {
    render() {
        return (
            <section className="course-list">
                <h2 className="main-title">
                    <strong>全部课程</strong>POPULAR COURSE
                </h2>
                <ul>
                    {this.props.courses &&
                        this.props.courses.map((course, index) => {
                            return <CourseCard key={course.id} {...course} />;
                        })}
                </ul>
            </section>
        );
    }
}
(CourseList as any).propTypes = {
    courses: array.isRequired
};

interface StudioCoursesPagePropsBasic {
    studio: StudioBasic;
    courses: CourseBasic[];
}
class StudioCoursesPage extends React.Component<
    StudioCoursesPagePropsBasic,
    any
> {
    render() {
        const { studio, courses } = this.props;

        return (
            <div id="studio-courses">
                <Notices notices={studio.notices} />
                <Banner src={studio.banner} alt={studio.name} />
                <Entrance sid={studio.id} />
                <CourseList {...{ courses }} />
                <StudioAddress
                    {...{
                        city: studio.city,
                        area: studio.area,
                        address: studio.address
                    }}
                />
                <Footer />
                <ContactBar tels={studio.tels} />
            </div>
        );
    }
}
(StudioCoursesPage as any).propTypes = {
    studio: object.isRequired,
    courses: array
};

const fetchData = (
    { dispatch }: { dispatch: Dispatch<any> },
    params: { sid: number }
) => {
    dispatch(fetchStudioInfo({ ...params }));
    dispatch(fetchStudioCourses({ ...params }));
};

function mapStateToProps(state: any) {
    const studio: StudioBasic = state.studio;
    const courses: CourseBasic[] = state.studioCourses;

    return {
        studio,
        courses
    };
}

const ConnectedComponent = connect(mapStateToProps)(StudioCoursesPage as any);

export default fetch(fetchData)(ConnectedComponent);
