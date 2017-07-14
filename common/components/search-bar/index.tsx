import "./index.less";

import * as React from "react";

import { render } from "react-dom";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { number, string, array, bool, func } from "prop-types";
import { TeacherBasic } from "../../interfaces/teacher";
import { getSuggestion } from "../../actions/search";

interface SearchProps {
    dispatch: Dispatch<any>;
    searchLists?: TeacherBasic[];
    delay?: number;
}
interface SearchState {
    value?: string;
    suggestions?: any;
}
class Search extends React.Component<SearchProps, SearchState> {
    static defaultProps = {
        delay: 300
    };
    timer: any;
    constructor(props: SearchProps) {
        super(props);
        this.state = {
            value: "",
            suggestions: []
        };
    }
    normalizeInput() {
        return this.state.value.toLowerCase().trim();
    }
    search() {
        if (!this.state.value) return;
        const keyword = this.normalizeInput();
        const inputNode: any = this.refs["input"];
        // 点击按钮 发送请求
        const { dispatch } = this.props;

        dispatch(getSuggestion({
            keyword    
        }));
    }

    onSearch(event: any) {
        event.preventDefault();
        this.search();
    }
    onChange(event: any) {
        let value = event.target.value;
        if (!value) return;

        this.setState(state => {
            state.value = value;
            return state;
        });
        clearTimeout(this.timer);

        this.timer = setTimeout(() => this.search(), this.props.delay);
    }

    render() {
        return (
            <div className="search-bar-wrapper col-l">
                <div className="search-box-wrapper">
                    <div>
                        <div className="type-wrapper">
                            <div className="type-header dropdown">
                                <a
                                    href="javascript:;"
                                    className="dropdown-header"
                                >
                                    课程
                                </a>
                                <div className="dropdown-panel">
                                    <a className="dropdown-item">
                                        <i className="dropdown-icon course" />
                                        <span className="dropdown-label">
                                            课程
                                        </span>
                                    </a>
                                    <a className="dropdown-item">
                                        <i className="dropdown-icon studio" />
                                        <span className="dropdown-label">
                                            机构
                                        </span>
                                    </a>
                                    <a className="dropdown-item">
                                        <i className="dropdown-icon teacher" />
                                        <span className="dropdown-label">
                                            老师
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <input
                            ref="input"
                            type="text"
                            value={this.state.value}
                            onChange={this.onChange.bind(this)}
                            placeholder="请输入您要找的内容"
                        />
                        <a
                            onClick={this.onSearch.bind(this)}
                            href="javascript:;"
                        >
                            <span className="text">确定</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

(Search as any).propTypes = {
    delay: number
}

export default connect()(Search as any);
