import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { string, array, func } from "prop-types";

import { RecommendBasic as RecommendRoleBasic } from "../../interfaces/common";
import { CourseBasic } from "../../interfaces/course";

import { fetchRecommendRoles } from "../../actions/common";
import { fetchRecommendCourses } from "../../actions/course";

import RoleCard from "../../components/role-profile";
import CourseCard from "../../components/course-card";
import NavBar from "../../components/nav-bar";
import SideBar from "../../components/side-bar";
import Footer from "../../components/footer";

import fetch from "../../../client/fetch";
import { catEntrances } from "../../configs/vars";

interface SearchBarProps {
    keyword?: string;
    onInput(keyword: string): void;
}

class SearchBar extends React.Component<SearchBarProps, any> {
    onInput() {
        //this.props.onInput((this.refs["input"] as any).value.trim());
    }

    render() {
        return (
            <div className="search-bar" id="search-bar">
                <div className="iconfont icon-left-arrow  search-back-btn" />
                {/*  <Link to={`/search?keyword=${this.props.keyword}`} className="iconfont search-back-btn">
                    &leftArrow;
                </Link>*/}
                <div className="iconfont icon-three-dot  search-toggle">
                    <div className="dropdown-panel">
                        <a href="" className="dropdown-item">
                            <i className="iconfont icon-cats " />
                            <span>科目分类</span>
                        </a>
                        <a href="" className="dropdown-item home">
                            <i className="iconfont icon-home" />
                            <span> 91首页 </span>
                        </a>
                        <a href="" className="dropdown-item">
                            <i className="iconfont icon-service " />
                            <span>在线客服</span>
                        </a>
                    </div>
                </div>
                <Link
                    to={`/search?keyword=${this.props.keyword}`}
                    className="search-input"
                >
                    <i className="iconfont icon-search-thin " />
                    <input
                        ref="input"
                        onInput={this.onInput.bind(this)}
                        type="text"
                        placeholder="搜索课程 / 机构 / 老师 "
                    />
                </Link>
            </div>
        );
    }
}
(SearchBar as any).propTypes = {
    keyword: string,
    onInput: func.isRequired
};

class Banner extends React.Component<any, any> {
    render() {
        return (
            <div
                id="banner"
                style={{
                    backgroundImage:
                        'url("http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/LRpqY6Lc58f9bb876ec48")'
                }}
            />
        );
    }
}

interface CatEntrancesProps {
    catEntrances: {
        name: string;
        className: string;
        cid: number;
    }[];
}

class CatEntrances extends React.Component<CatEntrancesProps, any> {
    render() {
        console.log("this.props.catEntrances", this.props.catEntrances);
        return (
            <div id="entrances">
                {this.props.catEntrances.map((entrance, index) => {
                    return (
                        <Link key={index} to={`/search/${entrance.cid}`}>
                            <i className={`icon icon-${entrance.className}`} />
                            {entrance.name}
                        </Link>
                    );
                })}
            </div>
        );
    }
}

(CatEntrances as any).propTypes = {
    catEntrances: array.isRequired
};

interface RecommendTeachersPropsBasic {
    recommends: RecommendRoleBasic[];
}
class RecommendRoles extends React.Component<RecommendTeachersPropsBasic, any> {
    render() {
        return (
            <div id="recommend-teachers">
                <ul>
                    {this.props.recommends.map((recommend, i) => {
                        return <RoleCard {...recommend} key={i} />;
                    })}
                </ul>
            </div>
        );
    }
}
(RecommendRoles as any).propTypes = {
    recommends: array.isRequired
};

interface RecommendCoursesPropsBasic {
    courses: CourseBasic[];
}
class RecommendCourses extends React.Component<
    RecommendCoursesPropsBasic,
    any
> {
    render() {
        return (
            <div id="recommend-courses">
                <ul>
                    {this.props.courses.map((course, index) => {
                        return <CourseCard key={course.id} {...course} />;
                    })}
                </ul>
            </div>
        );
    }
}
(RecommendCourses as any).propTypes = {
    courses: array.isRequired
};

interface PropsBasic {
    recommends: RecommendRoleBasic[];
    courses: CourseBasic[];
}

class Home extends React.Component<PropsBasic, any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            keyword: ""
        };
    }

    onInput(keyword: string) {
        this.setState({ keyword });
    }
    render() {
        let searchBarProps = {
            keyword: this.state.keyword,
            onInput: this.onInput.bind(this)
        };

        return (
            <div id="app-home">
                <div className="home-search-wrapper">
                    <SearchBar {...searchBarProps} />
                </div>

                <Banner />
                <CatEntrances catEntrances={catEntrances} />

                <RecommendRoles recommends={this.props.recommends} />
                <RecommendCourses courses={this.props.courses} />
                <NavBar />
                <SideBar />
                <Footer />
            </div>
        );
    }
}

(Home as any).propTypes = {
    recommends: array.isRequired
};

const fetchData = ({
    dispatch,
    getState
}: {
    dispatch: Dispatch<any>;
    getState: () => any;
}) => {
    // 判断如果之前已有数据，就不用再请求一次。如果业务要求数据时效性比较高，可不需要这步操作
    const roles: RecommendRoleBasic[] = getState().recommendRoles;
    const courses: CourseBasic[] = getState().recommendCourses || [];

    if (!roles.length) {
        dispatch(
            fetchRecommendRoles({
                pageSize: 10
            })
        );
        dispatch(
            fetchRecommendCourses({
                pageSize: 10
            })
        );
    }
};

function mapStateToProps(state: any) {
    const recommends = state.recommendRoles;
    const courses = state.recommendCourses;

    return {
        recommends,
        courses
    };
}

const ConnectedComponent = connect(mapStateToProps)(Home as any);

export default fetch(fetchData)(ConnectedComponent);
