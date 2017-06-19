import "./index.less";

import * as React from "react";
import { render } from "react-dom";
export default class NavBar extends React.Component<any, any> {

    constructor(props: any, context: any) {
        super(props, context)
    }

    render() {
        return (
            <div id="nav-bar">导航测试</div>
        )
    }
}
