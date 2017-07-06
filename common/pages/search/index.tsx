import "./index.less";

import * as React from "react";
import { render } from "react-dom";

export default class Search extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
    }
    render() {
        return (
            <div id="search-wrapper">
                <div>这是搜索页这是header</div>
            </div>
        );
    }
}
