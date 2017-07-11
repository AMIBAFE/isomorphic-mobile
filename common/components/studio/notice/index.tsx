import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { array } from "prop-types";

interface NoticesPropsBasic {
    notices: string[];
}
export default class Notices extends React.Component<NoticesPropsBasic, any> {
    render() {
        return (
            <section className="notice-part running">
                {this.props.notices &&
                    this.props.notices.length &&
                    <div>
                        <p>
                            通知：{this.props.notices.map((notice, index) => {
                                return (
                                    <span key={index}>
                                        {index + 1}、{notice}；
                                    </span>
                                );
                            })}
                        </p>
                    </div>}
            </section>
        );
    }
}
(Notices as any).propTypes = {
    notices: array
};
