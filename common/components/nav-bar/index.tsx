import "./index.less";

import * as React from "react";
import { render } from "react-dom";
export default class NavBar extends React.Component<any, any> {

    constructor(props: any, context: any) {
        super(props, context)
    }

    render() {
        return (
            <div id="nav-bar" className="nav-bar">
                <a className="nav-item">
                    <i className="nav-icon icon-main">
                    </i>
                    <span className="nav-label">
                        主页
                    </span>
                </a>
                <a className="nav-item">
                    <i className="nav-icon icon-find">
                    </i>
                    <span className="nav-label">
                        发现
                    </span>
                </a>
                <a className="nav-item">
                    <i className="nav-icon icon-courses">
                    </i>
                    <span className="nav-label">
                        科目
                    </span>
                </a>
                <a className="nav-item">
                    <i className="nav-icon icon-my">
                    </i>
                    <span className="nav-label">
                        我的
                    </span>
                </a>
            </div>

        )
    }
}
