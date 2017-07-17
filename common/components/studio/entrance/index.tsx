import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { number, array } from "prop-types";

interface EntrancePropsBasic {
    sid: number;
}
export default class Entrance extends React.Component<EntrancePropsBasic, any> {
    render() {
        return (
            <section className="entrance">
                <Link to={`/studio/${this.props.sid}`}>机构首页</Link>
                <Link to={`/studio/${this.props.sid}/courses/`}>全部课程</Link>
                <Link to={`/studio/${this.props.sid}/teachers/`}>师资团队</Link>
                <Link to={`/studio/${this.props.sid}/medias/`}>视频相册</Link>
            </section>
        );
    }
}
(Entrance as any).propTypes = {
    sid: number.isRequired
};
