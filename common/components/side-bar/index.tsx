import "./index.less";

import * as React from 'react';
import { render } from 'react-dom';

export default class SideBar extends React.Component<any, any>{
    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {
        return (
            <div id="side-bar">
                <div className="side-pic">
                    <i className="side-hi"></i>
                </div>
                <span className="side-label">免费找老师</span>
                <div className="side-back-top">
                    <i className="icon-arrow"></i>
                </div>
            </div>
        )
    }
}