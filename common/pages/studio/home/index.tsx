import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { string, array, object } from "prop-types";
import fetch from "../../../../client/fetch";

import { fetchStudioInfo, fetchStudioHomeData } from "../../../actions/studio";

import { PhotoBasic, PhotoAlbumBasic } from "../../../interfaces/common";
import { StudioBasic, StudioHomeDataBasic } from "../../../interfaces/studio";
import { TeacherBasic } from "../../../interfaces/teacher";
import { CourseBasic } from "../../../interfaces/course";

import Notices from "../../../components/studio/notice";
import Banner from "../../../components/studio/banner";
import Entrance from "../../../components/studio/entrance";
import RoleProfile from "../../../components/role-profile";
import CourseCard from "../../../components/course-card";
import Footer from "../../../components/footer";
import ContactBar from "../../../components/studio/contact-bar";
import StudioAddress from "../../../components/studio/address";

interface IntroPartPropsBasic {
    intro: string;
}
class IntroPart extends React.Component<IntroPartPropsBasic, any> {
    render() {
        return (
            <section className="intro-part">
                <h2 className="main-title">
                    <strong>机构简介</strong>INSTITUTIONAL PROFILE
                </h2>
                <div className="intro-text">
                    {this.props.intro}
                </div>
            </section>
        );
    }
}
(IntroPart as any).propTypes = {
    intro: string.isRequired
};

class HotCourses extends React.Component<{ courses: CourseBasic[] }, any> {
    render() {
        return (
            <section className="hot-courses">
                <h2 className="main-title">
                    <strong>热门课程</strong>POPULAR COURSE
                </h2>
                <ul>
                    {this.props.courses &&
                        this.props.courses.length &&
                        this.props.courses.map((course, index) => {
                            return <CourseCard key={course.id} {...course} />;
                        })}
                </ul>
            </section>
        );
    }
}
(HotCourses as any).propTypes = {
    courses: array
};

class HotTeachers extends React.Component<{ teachers: TeacherBasic[] }, any> {
    render() {
        return (
            <section className="hot-teachers">
                <h2 className="main-title">
                    <strong>热门老师</strong>TEACHER TEAM
                </h2>
                <ul>
                    {this.props.teachers &&
                        this.props.teachers.length &&
                        this.props.teachers.map((teacher, index) => {
                            return (
                                <RoleProfile key={teacher.id} {...teacher} />
                            );
                        })}
                </ul>
            </section>
        );
    }
}
(HotTeachers as any).propTypes = {
    teachers: array
};

class TeachingEnvironment extends React.Component<
    { photos: PhotoBasic[] },
    any
> {
    render() {
        return (
            <section className="teaching-environment">
                <h2 className="main-title">
                    <strong>教学环境</strong>TEACHING ENVIRONMENT
                </h2>
                <div>
                    <ul>
                        {this.props.photos &&
                            this.props.photos.map((photo, index) => {
                                return (
                                    <li key={index}>
                                        <img src={photo.src} alt={photo.alt} />
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </section>
        );
    }
}
(TeachingEnvironment as any).propTypes = {
    photos: array
};

class StudentStyle extends React.Component<
    { photoAlbums: PhotoAlbumBasic[] },
    any
> {
    render() {
        return (
            <section className="student-style">
                <h2 className="main-title">
                    <strong>学生风采</strong>STUDENT WORKS
                </h2>
                <ul>
                    {this.props.photoAlbums &&
                        this.props.photoAlbums.map((album, index) => {
                            return (
                                <li key={index}>
                                    <div
                                        style={{
                                            backgroundImage: `url(${album
                                                .photos[0].src})`
                                        }}
                                    />
                                    <h3>
                                        {album.desc}
                                    </h3>
                                    <p>
                                        <strong>
                                            {album.name}
                                        </strong>
                                    </p>
                                </li>
                            );
                        })}
                </ul>
            </section>
        );
    }
}
(StudentStyle as any).propTypes = {
    photoAlbums: array
};

interface StudioHomePropsBasic {
    studio: StudioBasic;
    homeData: StudioHomeDataBasic;
}
class StudioHomePage extends React.Component<StudioHomePropsBasic, any> {
    render() {
        const { studio, homeData } = this.props;

        return (
            <div id="studio-home">
                <Notices notices={studio.notices} />
                <Banner src={studio.banner} alt={studio.name} />
                <Entrance sid={studio.id} />
                <IntroPart intro={studio.intro} />
                <HotCourses courses={homeData.hotCourses} />
                <HotTeachers teachers={homeData.hotTeachers} />
                <TeachingEnvironment
                    photos={homeData.teachingEnvironmentPhotos}
                />
                <StudentStyle photoAlbums={homeData.studentStylePhotoAlbums} />
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
(StudioHomePage as any).propTypes = {
    studio: object.isRequired,
    homeData: object.isRequired
};

const fetchData = (
    { dispatch }: { dispatch: Dispatch<any> },
    params: { sid: number }
) => {
    dispatch(fetchStudioInfo({ ...params }));
    dispatch(fetchStudioHomeData({ ...params }));
};

function mapStateToProps(state: any) {
    const studio: StudioBasic = state.studio;
    const homeData: StudioHomeDataBasic = state.studioHomeData;

    return {
        studio,
        homeData
    };
}

const ConnectedComponent = connect(mapStateToProps)(StudioHomePage as any);

export default fetch(fetchData)(ConnectedComponent);
