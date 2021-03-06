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
import PhotoSwiper from "../../components/photoswipe";

class Kindergarten extends React.Component<
    KindergartenBasic,
    {
        showEnvAlbumean: boolean;
        envAlbumSwiperIndex: number;
        showHonorAlbumean: boolean;
    }
> {
    constructor() {
        super();

        this.state = {
            showEnvAlbumean: false,
            showHonorAlbumean: false,
            envAlbumSwiperIndex: 0
        };
    }

    handleToggleEnvAlbum(index?: number) {
        this.setState({
            showEnvAlbumean: !this.state.showEnvAlbumean,
            envAlbumSwiperIndex: index || 0
        });
    }

    handleToggleHonorAlbum() {
        this.setState({
            showHonorAlbumean: !this.state.showHonorAlbumean
        });
    }

    render() {
        const {
            intro,
            address,
            video,
            envAlbum,
            honorAlbum,
            checkinExcel
        } = this.props;

        return (
            <div id="kindergarten-home">
                <section className="intro-part">
                    <h2 className="main-title">
                        <strong>学校简介</strong>SCHOLL PROFILE
                    </h2>
                    <Video {...video} />
                    <div
                        className="intro-text"
                        dangerouslySetInnerHTML={{ __html: intro }}
                    />
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
                                    <li
                                        key={index}
                                        onClick={this.handleToggleEnvAlbum.bind(
                                            this,
                                            index
                                        )}
                                    >
                                        <div
                                            className="album-cover"
                                            style={{
                                                backgroundImage: `url(${photo.src})`
                                            }}
                                        />
                                        <p>
                                            <strong>
                                                {photo.name ||
                                                    `学校环境${index + 1}`}
                                            </strong>
                                        </p>
                                    </li>
                                );
                            })}
                    </ul>
                    {this.state.showEnvAlbumean
                        ? <PhotoSwiper
                              photos={envAlbum}
                              onClose={this.handleToggleEnvAlbum.bind(this)}
                              index={this.state.envAlbumSwiperIndex}
                          />
                        : null}
                </section>
                <section className="school-honor">
                    <h2 className="main-title">
                        <strong>学校荣誉</strong>SCHOOL HONOR
                    </h2>
                    <div className="scroller">
                        <ul
                            className="playing"
                            onClick={this.handleToggleHonorAlbum.bind(this)}
                        >
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
                    {this.state.showHonorAlbumean
                        ? <PhotoSwiper
                              photos={honorAlbum}
                              onClose={this.handleToggleHonorAlbum.bind(this)}
                          />
                        : null}
                </section>
                <section className="booking-way">
                    <h2 className="main-title">
                        <strong>报名方式</strong>BOOKING WAY
                    </h2>
                    <ul className="ways">
                        <li>
                            <p>18个月以上适读</p>
                        </li>
                        <li>
                            <p>下载并填写表格</p>
                        </li>
                        <li>
                            <p>
                                找{address.contact}老师咨询（{address.tels && address.tels[0]}）
                            </p>
                        </li>
                        <li>
                            <p>于9月1日前带户口本、 家长身份证到学校报名</p>
                        </li>
                    </ul>
                    <div className="document">
                        <p>
                            请下载后用A4纸打印<br />并如实填写（手写、打印均可）
                        </p>
                        <div>
                            <h2>学校新生报告登记表</h2>
                            <img
                                src={require("./book-excel.png")}
                                alt="学校新生报告登记表"
                            />
                            <p>如是在微信打开，请长按图片，保存图片。</p>
                            <a className="btn-download" href={checkinExcel}>
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
    params: { sid: number }
) => dispatch(fetchKindergarten({ ...params }));

function mapStateToProps(state: any) {
    const kindergarten: KindergartenBasic = state.kindergarten;

    return { ...kindergarten };
}

const ConnectedComponent = connect(mapStateToProps)(Kindergarten as any);

export default fetch(fetchData)(ConnectedComponent);
