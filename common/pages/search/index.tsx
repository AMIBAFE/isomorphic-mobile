import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { string, bool, number, array, func } from "prop-types";

import { HotSearchCatBasic } from "../../interfaces/cat";
import { fetchHotSearchCats } from "../../actions/cats";

import fetch from "../../../client/fetch";

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
interface PropsBasic {
    hotSearchCats: HotSearchCatBasic;
}

class Search extends React.Component<PropsBasic, any> {
    constructor(props: any, context: any) {
        super(props, context);
    }
    render() {
        return (
            <div id="search-wrapper">
                <SearchBar />
                <div className="search-hot-wrapper">
                    <p className="hot-title">热搜</p>
                    <div className="hot-cats-wrapper">
                        <a href="javascript:;" className="hot-cat">
                            尤克里里
                        </a>
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

const fetchData = ({ dispatch }: { dispatch: Dispatch<any> }) =>
    dispatch(fetchHotSearchCats());

function mapStateToProps(state: any) {
    const hotSearchCats = state.hotSearchCats;

    return {
        hotSearchCats
    };
}

(Search as any).propTypes = {
    id: number,
    label: string,
    hotSearchCats: array
};

const ConnectedComponent = connect(mapStateToProps)(Search as any);

export default fetch(fetchData)(ConnectedComponent);
