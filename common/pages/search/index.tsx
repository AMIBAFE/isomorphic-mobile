import "./index.less";

import * as React from "react";
import { render } from "react-dom";

import AutoComplete from "../../components/autocomplete/index";
import ReturnBtn from "../../components/return-btn/index";
export default class Search extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
    }
    render() {
        return (
            <div id="search-wrapper">
                <div className="search-bar">
                    <ReturnBtn history={this.props.history} />
                    <AutoComplete />
                </div>
                <div>这是搜索页这是header</div>
            </div>
        );
    }
}
