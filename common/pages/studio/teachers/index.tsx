import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { string, array, object } from "prop-types";
import fetch from "../../../../client/fetch";

import { TeacherBasic } from "../../../interfaces/teacher";
import { StudioBasic, StudioHomeDataBasic } from "../../../interfaces/studio";
import { fetchStudioInfo, fetchStudioTeachers } from "../../../actions/studio";

import Notices from "../../../components/studio/notice";
import Banner from "../../../components/studio/banner";
import Entrance from "../../../components/studio/entrance";
import TeacherCard from "../../../components/role-profile";
import Footer from "../../../components/footer";
import ContactBar from "../../../components/studio/contact-bar";
import StudioAddress from "../../../components/studio/address";

class TeacherList extends React.Component<{ teachers: TeacherBasic[] }, any> {
    render() {
        return (
            <section className="teacher-list">
                <h2 className="main-title">
                    <strong>师资团队</strong>TEACHER TEAM
                </h2>
                <ul>
                    {this.props.teachers &&
                        this.props.teachers.map((teacher, index) => {
                            return (
                                <TeacherCard key={teacher.id} {...teacher} />
                            );
                        })}
                </ul>
            </section>
        );
    }
}
(TeacherList as any).propTypes = {
    teachers: array.isRequired
};

interface StudioTeachersPagePropsBasic {
    studio: StudioBasic;
    teachers: TeacherBasic[];
}
class StudioTeachersPage extends React.Component<
    StudioTeachersPagePropsBasic,
    any
> {
    render() {
        const { studio, teachers } = this.props;

        return (
            <div id="studio-courses">
                <Notices notices={studio.notices} />
                <Banner src={studio.banner} alt={studio.name} />
                <Entrance sid={studio.id} />
                <TeacherList {...{ teachers }} />
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
(StudioTeachersPage as any).propTypes = {
    studio: object.isRequired,
    courses: array
};

const fetchData = (
    { dispatch }: { dispatch: Dispatch<any> },
    params: { sid: number }
) => {
    dispatch(fetchStudioInfo({ ...params }));
    dispatch(fetchStudioTeachers({ ...params }));
};

function mapStateToProps(state: any) {
    const studio: StudioBasic = state.studio;
    const teachers: TeacherBasic[] = state.studioTeachers;

    return {
        studio,
        teachers
    };
}

const ConnectedComponent = connect(mapStateToProps)(StudioTeachersPage as any);

export default fetch(fetchData)(ConnectedComponent);
