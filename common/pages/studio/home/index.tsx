import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { string, array, object } from "prop-types";
import fetch from "../../../../client/fetch";

import { fetchStudioDetail } from "../../../actions/studio";

import { StudioBasic } from "../../../interfaces/studio";
interface StudioHomeBasic {
    studio: StudioBasic;
}

class StudioHome extends React.Component<StudioHomeBasic, any> {
    render() {
        const { studio } = this.props;

        return (
            <div id="studio-home">
                <section className="intro-part">
                    <h2 className="main-title">
                        <strong>机构简介</strong>INSTITUTIONAL PROFILE
                    </h2>
                    <div className="intro-text">
                        {studio.intro}
                    </div>
                </section>
            </div>
        );
    }
}
(StudioHome as any).propTypes = {
    studio: object.isRequired
};

const fetchData = (
    { dispatch }: { dispatch: Dispatch<any> },
    params: { sid: number }
) => dispatch(fetchStudioDetail({ ...params }));

function mapStateToProps(state: any) {
    const studio: StudioBasic = state.studio;

    return {
        studio
    };
}

const ConnectedComponent = connect(mapStateToProps)(StudioHome as any);

export default fetch(fetchData)(ConnectedComponent);
