import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { string, array } from "prop-types";

export default class StudioAddress extends React.Component<
    {
        city: string;
        area: string;
        address: string;
    },
    any
> {
    render() {
        return (
            <section className="studio-address">
                <h2 className="main-title">
                    <strong>联系方式</strong>CONTACT US
                </h2>
                <address>
                    <div>
                        <i className="icon-location" />
                        <p>
                            机构地址<strong>
                                {this.props.city}
                                {this.props.area}
                                {this.props.address}
                            </strong>
                        </p>
                    </div>
                </address>
            </section>
        );
    }
}
(StudioAddress as any).propTypes = {
    city: string,
    area: string,
    address: string
};
