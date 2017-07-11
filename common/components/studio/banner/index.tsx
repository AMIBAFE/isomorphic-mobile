import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { string, array } from "prop-types";

interface BannerPropsBasic {
    src: string;
    alt: string;
}
export default class Banner extends React.Component<BannerPropsBasic, any> {
    render() {
        return (
            <div className="banner">
                <img src={this.props.src} alt={this.props.alt} />
            </div>
        );
    }
}
(Banner as any).propTypes = {
    src: string.isRequired,
    alt: string
};
