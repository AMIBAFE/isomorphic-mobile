import './index.less';

import * as React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { array, func } from 'prop-types';

import { RecommendBasic } from '../../interfaces/common';
import { TeacherBasic } from '../../interfaces/teacher';
import { fetchRecommendTeachers } from '../../actions/teacher';

import fetch from '../../../client/fetch';
import TeacherCard from '../../components/teacher-card';
import NavBar from '../../components/nav-bar';
import SideBar from '../../components/side-bar';
import { catEntrances } from '../../configs/vars';


interface SearchBarProps {
    keyword?: string,
    onInput(keyword: string): void;
   // onInput?: (keyword: string) => void;
}

class SearchBar extends React.Component<SearchBarProps, any> {
    onInput() {
        //this.props.onInput((this.refs["input"] as any).value.trim());
    }

    render() {
        return (
            <div id="search-bar">
                <Link to={ `/search?keyword=${this.props.keyword}` } className="iconfont icon-arrow-left-b  search-back-btn">
                </Link>
                <div className="iconfont icon-dot-three  search-toggle">
                    <div className="dropdown-panel">
                        <a href="" className="dropdown-item">
                            <i className="iconfont icon-cats "></i>
                            <span>科目分类</span>
                        </a>
                        <a href="" className="dropdown-item home">
                            <i className="iconfont icon-home"></i>
                            <span> 91首页 </span>
                        </a>
                        <a href="" className="dropdown-item">
                            <i className="iconfont icon-service "></i>
                            <span>在线客服</span>
                        </a>
                    </div>
                </div>
                <div className="search-input">
                    <i className="iconfont icon-search-thin "></i>
                    <input ref="input" onInput={ this.onInput.bind(this) } type="text" placeholder="搜索课程 / 机构 / 老师 " />
                </div>
            </div>
        )
    }
}

class Banner extends React.Component<any, any> {
    render() {
        return (
            <div id="banner" style={{ backgroundImage: 'url("http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/LRpqY6Lc58f9bb876ec48")' }}>
            </div>
        )
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
                        <Link key={index} to={`/search/${entrance.cid}`}><i className={`icon icon-${entrance.className}`}></i> {entrance.name}</Link>
                    )
                })}
            </div>
        )
    }
}

(CatEntrances as any).propTypes = {
    catEntrances: array.isRequired,
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
    recommends: TeacherBasic[],
}
/*
@connect(mapStateToProps)
*/
class Home extends React.Component<PropsBasic, any> {
    getInitialState() {
        return {
            keyword: ""
        }
    }

    onInput(keyword: string) {
        this.setState({ keyword });
    }
    render() {
        let searchBarProps = {
            keyword: this.state.keyword,
            onInput: this.onInput.bind(this),
        }

        return (
            <div id="app-home">
                <SearchBar {...searchBarProps}/>
                <Banner />
                <CatEntrances catEntrances={catEntrances} />

                <div id="recommend-list">
                    {this.props.recommends.map((recommend, i) => {
                        return (
                            <TeacherCard { ...recommend } key={i} />
                        )
                    })}
                </div>

                <NavBar />
                <SideBar />
            </div>
        )
    }
}

/**/
const fetchData = ({ dispatch }: { dispatch: Dispatch<any> }) =>
    dispatch(fetchRecommendTeachers({
        pageSize: 10,
    }));


function mapStateToProps(state: any) {
    const recommends = state.recommendTeachers;

    return {
        recommends,
    }
}

(Home as any).propTypes = {
    recommends: array.isRequired,
    onInput: func.isRequired
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