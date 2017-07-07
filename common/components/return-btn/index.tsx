import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
export default class ReturnButton extends React.Component<any, any> {
    handleGoBack = () => {
        this.props.history.goBack();
    };
    render() {
        return (
            <div id="return-btn" onTouchEnd={this.handleGoBack}>
                <i className="iconfont icon-left-arrow search-back-btn" />
            </div>
        );
    }
}
