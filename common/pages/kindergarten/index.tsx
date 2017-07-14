import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { number, string, array, object } from "prop-types";

import { KindergartenBasic } from "../../interfaces/kindergarten";

import fetch from "../../../client/fetch";
import { fetchKindergarten } from "../../actions/kindergarten";

import Footer from "../../components/footer";
import Video from "../../components/video";

class Kindergarten extends React.Component<KindergartenBasic, any> {
    render() {
        const { intro, address, video, envAlbum, honorAlbum } = this.props;

        return (
            <div id="kindergarten-home">
                <section className="intro-part">
                    <h2 className="main-title">
                        <strong>学校简介</strong>SCHOLL PROFILE
                    </h2>
                    <Video {...video} />
                    <div className="intro-text">
                        {intro}
                    </div>
                </section>
                <section className="school-environment">
                    <h2 className="main-title">
                        <strong>学校环境</strong>SCHOOL ENVIRONMENT
                    </h2>
                    <ul>
                        {envAlbum &&
                            envAlbum.length &&
                            envAlbum.map((photo, index) => {
                                return (
                                    <li key={index}>
                                        <div
                                            style={{
                                                backgroundImage: `url(${photo.src})`
                                            }}
                                        />
                                        <p>
                                            <strong>
                                                {photo.name}
                                            </strong>
                                        </p>
                                    </li>
                                );
                            })}
                    </ul>
                </section>
                <section className="school-honor">
                    <h2 className="main-title">
                        <strong>学校荣誉</strong>SCHOOL HONOR
                    </h2>
                    <div>
                        <ul className="playing">
                            {honorAlbum &&
                                honorAlbum.length &&
                                honorAlbum.map((photo, index) => {
                                    return (
                                        <li key={index}>
                                            <img src={photo.src} />
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </section>
                <section className="booking-way">
                    <h2 className="main-title">
                        <strong>报名方式</strong>BOOKING WAY
                    </h2>
                    <ul className="ways">
                        <li>
                            <p>下载并填写表格</p>
                            <p>带表格到校报名</p>
                        </li>
                        <li>
                            <p>
                                咨询人：{address.contact}
                                <br />tel：{address.tels && address.tels[0]}
                            </p>
                        </li>
                    </ul>
                    <div className="document">
                        <p>
                            请下载后用A4纸打印<br />并如实填写（手写、打印均可）
                        </p>
                        <div>
                            <h2>学校新生报告登记表</h2>
                            <img src="" alt="学校新生报告登记表" />
                            <a
                                className="btn-download"
                                href="http://st.qmin91.com/images/logo-165-1_136d8b9.png"
                                download="学校新生报告登记表"
                            >
                                点击下载
                            </a>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}
(Kindergarten as any).propTypes = {
    id: number.isRequired,
    name: string.isRequired,
    intro: string,
    video: object,
    address: object,
    envAlbum: array,
    honorAlbum: array
};

const fetchData = (
    { dispatch }: { dispatch: Dispatch<any> },
    params: { kid: number }
) => dispatch(fetchKindergarten({ ...params }));

function mapStateToProps(state: any) {
    const kindergarten: KindergartenBasic = state.kindergarten;

    return { ...kindergarten };
}

const ConnectedComponent = connect(mapStateToProps)(Kindergarten as any);

export default fetch(fetchData)(ConnectedComponent);
