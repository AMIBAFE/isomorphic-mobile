import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { string, array, func } from "prop-types";

import { RecommendBasic } from "../../interfaces/common";
import { TeacherBasic } from "../../interfaces/teacher";
import { fetchRecommendTeachers } from "../../actions/teacher";

import fetch from "../../../client/fetch";
import TeacherCard from "../../components/teacher-profile";
import NavBar from "../../components/nav-bar";
import SideBar from "../../components/side-bar";
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
                            <i
                                className={`icon icon-${entrance.className}`}
                            />{" "}
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
    recommends: TeacherBasic[];
}
class RecommendTeachers extends React.Component<RecommendTeachersPropsBasic, any> {
    render() {
        return (
            <div id="recommend-list">
                <ul>
                    {this.props.recommends.map((recommend, i) => {
                        return <TeacherCard {...recommend} key={i} />;
                    })}    
                </ul> 
            </div>
        )
    }
}
/*
function mapStateToProps(state: any) {
    const recommends = state.recommendTeachers;

    return {
        recommends,
    }
}
*/

interface PropsBasic {
    recommends: TeacherBasic[];
}

/*
@connect(mapStateToProps)
*/

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

                <RecommendTeachers recommends={ this.props.recommends }/>

                <NavBar />
                <SideBar />
            </div>
        );
    }
}

/**/
const fetchData = ({ dispatch, getState }: { dispatch: Dispatch<any>, getState: () => any }) => {
    // 判断如果之前已有数据，就不用再请求一次。如果业务要求数据时效性比较高，可不需要这步操作
    const teachers: TeacherBasic[] = getState().recommendTeachers;
    
    if (!teachers.length) {
        dispatch(
            fetchRecommendTeachers({
                pageSize: 10
            })
        );   
    }
};

function mapStateToProps(state: any) {
    const recommends = state.recommendTeachers;

    return {
        recommends
    };
}

(Home as any).propTypes = {
    recommends: array.isRequired
};

/**/
const ConnectedComponent = connect(mapStateToProps)(Home as any);

export default fetch(fetchData)(ConnectedComponent);

/*
const fetchData = ({ dispatch }: { dispatch: Dispatch<any> }) =>
    dispatch(fetchRecommendTeachers({
        pageSize: 10,
    }));
export default fetch(fetchData)(Home);
*/
