import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { number, string, array, bool } from "prop-types";

interface SearchBarProps {
    autoFocus?: bool;
    delay?: number;
    inputName?: string;
    placeholder?: string;
    initValue?: string;
}
export default class SearchBar extends React.Component<SearchBarProps, any> {
    static defaultProps = {
        autoFocus: false,
        delay: 200
    };
    constructor(props: any, context: any) {
        super(props, context);
    }
    render() {
        return (
            <div className="search-bar-wrapper col-l">
                <div className="search-box-wrapper">
                    <form action="">
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
                            type="text"
                            ref="input"
                            placeholder={this.props.placeholder}
                            name={this.props.inputName}
                            value={this.state.value}
                            onChange={this.onChange.bind(this)}
                            maxLength="100"
                            autoCapitalize="none"
                            autoComplete="off"
                            autoCorrect="off"
                        />
                        <button type="submit">
                            <span className="text">确定</span>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
