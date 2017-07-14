import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { string, array, func } from "prop-types";
import * as classNames from "classNames";

import { RecommendRoleBasic, HotRoleBasic } from "../../interfaces/common";
import { CourseBasic } from "../../interfaces/course";

import {
    fetchRecommendRoles,
    fetchRecommendCourses,
    fetchHotRoles,
    fetchHotCourses,
    fetchHomePageData
} from "../../actions/common";

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

class HotRoles extends React.Component<{ hots: HotRoleBasic[] }, any> {
    render() {
        return (
            <div id="hot-teachers">
                <ul>
                    {this.props.hots.map((hot, i) => {
                        return <RoleCard {...hot} key={i} />;
                    })}
                </ul>
            </div>
        );
    }
}
(HotRoles as any).propTypes = {
    hots: array.isRequired
};

class RecommendCourses extends React.Component<
    { courses: CourseBasic[] },
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

class HotCourses extends React.Component<{ courses: CourseBasic[] }, any> {
    render() {
        return (
            <div id="hot-courses">
                <ul>
                    {this.props.courses.map((course, index) => {
                        return <CourseCard key={course.id} {...course} />;
                    })}
                </ul>
            </div>
        );
    }
}
(HotCourses as any).propTypes = {
    courses: array.isRequired
};

interface RolesPropsBasic {
    recommends: RecommendRoleBasic[];
    hots: HotRoleBasic[];
}
interface RolesStateBasic {
    tabIndex: number;
}
class RolesSection extends React.Component<RolesPropsBasic, RolesStateBasic> {
    constructor() {
        super();

        this.state = {
            tabIndex: 0
        };
    }

    handleSwitchTab(tabIndex: number) {
        this.setState({
            tabIndex
        });
    }

    render() {
        return (
            <div id="adv-roles">
                <ul className="tabs">
                    <li
                        className={classNames({
                            active: this.state.tabIndex === 0
                        })}
                        onClick={this.handleSwitchTab.bind(this, 0)}
                    >
                        推荐老师
                    </li>
                    <li
                        className={classNames({
                            active: this.state.tabIndex === 1
                        })}
                        onClick={this.handleSwitchTab.bind(this, 1)}
                    >
                        热门老师
                    </li>
                </ul>
                {this.state.tabIndex === 0
                    ? <RecommendRoles recommends={this.props.recommends} />
                    : <HotRoles hots={this.props.hots} />}
            </div>
        );
    }
}
(RolesSection as any).propTypes = {
    recommendRoles: array,
    hotRoles: array
};

interface CoursesPropsBasic {
    recommends: CourseBasic[];
    hots: CourseBasic[];
}
class CoursesSection extends React.Component<
    CoursesPropsBasic,
    { tabIndex: number }
> {
    constructor() {
        super();

        this.state = {
            tabIndex: 0
        };
    }

    handleSwitchTab(tabIndex: number) {
        this.setState({
            tabIndex
        });
    }

    render() {
        return (
            <div id="adv-courses">
                <ul className="tabs">
                    <li
                        className={classNames({
                            active: this.state.tabIndex === 0
                        })}
                        onClick={this.handleSwitchTab.bind(this, 0)}
                    >
                        推荐课程
                    </li>
                    <li
                        className={classNames({
                            active: this.state.tabIndex === 1
                        })}
                        onClick={this.handleSwitchTab.bind(this, 1)}
                    >
                        热门课程
                    </li>
                </ul>
                {this.state.tabIndex === 0
                    ? <RecommendCourses courses={this.props.recommends} />
                    : <HotCourses courses={this.props.hots} />}
            </div>
        );
    }
}
(CoursesSection as any).propTypes = {
    recommends: array,
    hots: array
};

interface PropsBasic {
    recommendRoles: RecommendRoleBasic[];
    recommendCourses: CourseBasic[];
    hotRoles: HotRoleBasic[];
    hotCourses: CourseBasic[];
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
                <RolesSection
                    recommends={this.props.recommendRoles}
                    hots={this.props.hotRoles}
                />
                <CoursesSection
                    recommends={this.props.recommendCourses}
                    hots={this.props.hotCourses}
                />
                <NavBar />
                <SideBar />
                <Footer />
            </div>
        );
    }
}
(Home as any).propTypes = {
    recommendRoles: array,
    recommendCourses: array,
    hotRoles: array,
    hotCourses: array
};

const fetchData = ({
    dispatch,
    getState
}: {
    dispatch: Dispatch<any>;
    getState: () => any;
}) => {
    // 判断如果之前已有数据，就不用再请求一次。如果业务要求数据时效性比较高，可不需要这步操作
    const recommendRoles: RecommendRoleBasic[] = getState().recommendRoles;
    const recommendCourses: CourseBasic[] = getState().recommendCourses;
    const hotRoles: HotRoleBasic[] = getState().hotRoles;
    const hotCourses: CourseBasic[] = getState().hotCourses;

    dispatch(fetchHomePageData());
};

function mapStateToProps(state: any) {
    const recommendRoles = state.recommendRoles;
    const hotRoles = state.hotRoles;
    const recommendCourses = state.recommendCourses;
    const hotCourses = state.hotCourses;

    return {
        recommendRoles,
        hotRoles,
        recommendCourses,
        hotCourses
    };
}

const ConnectedComponent = connect(mapStateToProps)(Home as any);

export default fetch(fetchData)(ConnectedComponent);
