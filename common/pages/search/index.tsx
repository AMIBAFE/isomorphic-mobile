import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { string, bool, number, func, array } from "prop-types";

import { catBasic } from "../../interfaces/cat";
import { fetchHotSearchCats } from "../../actions/cats";

import fetch from "../../../client/fetch";

interface SearchBarProps {
    keyword?: string;
    onInput(keyword: string): void;
}
class SearchBar extends React.Component<any, any> {
    onInput() {
        //this.props.onInput((this.refs["input"] as any).value.trim());
    }
    render() {
        return (
            <div className="search-box-wrapper">
                <div className="type-wrapper">
                    <div className="type-header dropdown">
                        <a href="javascript:;" className="dropdown-header">
                            课程
                        </a>
                        <div className="dropdown-panel">
                            <a className="dropdown-item">
                                <i className="dropdown-icon course" />
                                <span className="dropdown-label">课程</span>
                            </a>
                            <a className="dropdown-item">
                                <i className="dropdown-icon studio" />
                                <span className="dropdown-label">机构</span>
                            </a>
                            <a className="dropdown-item">
                                <i className="dropdown-icon teacher" />
                                <span className="dropdown-label">老师</span>
                            </a>
                        </div>
                    </div>
                </div>
                <input type="text" placeholder="" />
                <button type="submit">
                    <span className="text">取消</span>
                </button>
            </div>
        );
    }
}

(SearchBar as any).propTypes = {
    keyword: string,
    //带required 就不行
    onInput: func.isRequired
};

interface SearchProps {
    hotSearchCats: catBasic[];
}
class Search extends React.Component<SearchProps, any> {
    constructor(props: SearchProps, context: any) {
        super(props, context);
    }
    render() {
        const { hotSearchCats } = this.props;
        return (
            <div id="search-wrapper">
                <SearchBar />
                {/*  <HotSearchCats  />*/}
                <div className="search-hot-wrapper">
                    <p className="hot-title">热搜</p>
                    <div className="hot-cats-wrapper">
                        {hotSearchCats.map((hotCat, i) => {
                            return (
                                <Link
                                    key={hotCat.id}
                                    className="hot-cat"
                                    to={`/course/${hotCat.id}`}
                                >
                                    {hotCat.label || "类目名称"}
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="search-history-wrapper">
                    <p className="history-title">历史记录</p>
                    <div className="history-cats-wrapper">
                        <a href="javascript:;" className="history-cat">
                            尤克里里
                        </a>
                        <a href="javascript:;" className="history-cat">
                            自由搏击
                        </a>
                        <a href="javascript:;" className="history-cat">
                            新概念英语
                        </a>
                    </div>
                    <div className="history-reset">
                        <a href="javascript:;" className="reset-button">
                            <i className="icon iconfont icon-reset" />
                            <span className="text">清空历史记录</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
(Search as any).propTypes = {
    hotSearchCats: array.isRequired
};
const fetchData = ({ dispatch }: { dispatch: Dispatch<any> }) =>
    dispatch(fetchHotSearchCats());

function mapStateToProps(state: any) {
    const hotSearchCats = state.hotSearchCats;
    // 1. 这个state里面的hotSearchCats
    //就是reduces//all.ts里面的combineReduces里面的那个 hotSearchCats: hotSearchReducer

    return {
        hotSearchCats
    };
}

const ConnectedComponent = connect(mapStateToProps)(Search as any);

export default fetch(fetchData)(ConnectedComponent);
