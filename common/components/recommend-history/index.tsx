import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
export default class RecommendHistory extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {
        return (
            <div id="autoComplete" className="autoComplete">
                这里是推荐与历史
            </div>
        );
    }
}
