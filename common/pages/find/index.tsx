import "./index.less";

import * as React from "react";
import { render } from "react-dom";

export default class Find extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
    }
    render() {
        return (
            <div id="find">
                <p>发现页测试 这里会引入搜索条</p>
            </div>
        );
    }
}
