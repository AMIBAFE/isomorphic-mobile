import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { string, bool } from "prop-types";

class SearchBar extends React.Component<any, any> {
    onInput() {
        //this.props.onInput((this.refs["input"] as any).value.trim());
    }

    render() {
        return (
            <div className="search-bar" id="search-bar">
                seaarch搜索
            </div>
        );
    }
}

export default class Search extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
    }
    render() {
        return (
            <div id="search-wrapper">
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
                <div className="search-hot-wrapper">
                    <p className="hot-title">热搜</p>
                    <div className="hot-cats-wrapper">
                        <a href="javascript:;" className="hot-cat">
                            尤克里里
                        </a>
                        <a href="javascript:;" className="hot-cat">
                            自由搏击
                        </a>
                        <a href="javascript:;" className="hot-cat">
                            新概念英语
                        </a>
                        <a href="javascript:;" className="hot-cat">
                            钢琴
                        </a>
                        <a href="javascript:;" className="hot-cat">
                            高考数学
                        </a>
                        <a href="javascript:;" className="hot-cat">
                            尤克里
                        </a>
                        <a href="javascript:;" className="hot-cat">
                            尤克里里数字
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
