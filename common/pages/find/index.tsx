import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { string, bool, number, func, array } from "prop-types";

import { catBasic } from "../../interfaces/cat";
import { fetchFindLists } from "../../actions/find";

import fetch from "../../../client/fetch";

interface findListsProps {
    findLists: catBasic[];
}

export default class Find extends React.Component<findListsProps, any> {
    constructor(props: findListsProps, context: any) {
        super(props, context);
    }
    render() {
        const { findLists } = this.props;
        return (
            <div id="find-wrapper">
                <div className="find-content-wrapper">
                    <div className="find-item">
                        <div className="find-intro">
                            <p className="find-title">育儿小课堂</p>
                            <p className="find-category">亲子育儿</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
