import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { number, array } from "prop-types";

interface EntrancePropsBasic {
    sid: number;
}
export default class Entrance extends React.Component<EntrancePropsBasic, any> {
    render() {
        return (
            <section className="entrance">
                <a href={`/studio/${this.props.sid}`}>机构首页</a>
                <a href={`/studio/${this.props.sid}/courses/`}>全部课程</a>
                <a href={`/studio/${this.props.sid}/teachers/`}>师资团队</a>
                <a href={`/studio/${this.props.sid}/videos-photos/`}>视频相册</a>
            </section>
        );
    }
}
(Entrance as any).propTypes = {
    sid: number.isRequired
};
