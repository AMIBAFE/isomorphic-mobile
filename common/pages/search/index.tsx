import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { string, bool, number, func, array } from "prop-types";

import { catBasic, HotSearchCatBasic } from "../../interfaces/cat";
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
    keyword: string
    //带required 就不行
    //onInput: func.isRequired
};

/*interface HotSearchCatsProps {
    hotSearchCats: {
        id: number;
        label: string;
    }[];
}

class HotSearchCats extends React.Component<HotSearchCatsProps, any> {
    render() {
        console.log("子祖件里面this.props.hotSearchCats", this.props.hotSearchCats);
        return (
            <div className="search-hot-wrapper">
                <p className="hot-title">热搜</p>
                <div className="hot-cats-wrapper">
                    {this.props.hotSearchCats.map((hotCat, i) => {
                        return (
                            <Link
                                key={this.props.id}
                                className="hot-cat"
                                to={`/course/${this.props.id}`}
                            >
                                {this.props.label || "类目名称"}
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    }
}
(HotSearchCats as any).propTypes = {
    hotSearchCats: array.isRequired
};*/

class Search extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
    }
    render() {
        console.log("父祖件里面this.props.hotSearchCats", this.props.hotSearchCats);
        const hotCats = this.props;
        return (
            <div id="search-wrapper">
                <SearchBar />
                {/*  <HotSearchCats  />*/}
                <div className="search-hot-wrapper">
                    <p className="hot-title">热搜</p>
                    <div className="hot-cats-wrapper">
                        {this.props.hotSearchCats.map((hotCat, i) => {
                            return (
                                <Link
                                    key={this.props.id}
                                    className="hot-cat"
                                    to={`/course/${this.props.id}`}
                                >
                                    {this.props.label || "类目名称"}
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

    return {
        hotSearchCats
    };
}

const ConnectedComponent = connect(mapStateToProps)(Search as any);

export default fetch(fetchData)(ConnectedComponent);
