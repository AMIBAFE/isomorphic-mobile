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
        showAlbum: boolean;
        albumSwiperIndex: number;
    }
> {
    constructor() {
        super();

        this.state = {
            showAlbum: false,
            albumSwiperIndex: 0
        };
    }

    handleToggleAlbum(index?: number) {
        this.setState({
            showAlbum: !this.state.showAlbum,
            albumSwiperIndex: index || 0
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
                                        onClick={this.handleToggleAlbum.bind(
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
                    {this.state.showAlbum
                        ? <PhotoSwiper
                              photos={envAlbum}
                              onClose={this.handleToggleAlbum.bind(this)}
                              index={this.state.albumSwiperIndex}
                          />
                        : null}
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
                            <img
                                src={require("./book-excel.png")}
                                alt="学校新生报告登记表"
                            />
                            <a
                                className="btn-download"
                                href={checkinExcel}
                                target="_blank"
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
    params: { sid: number }
) => dispatch(fetchKindergarten({ ...params }));

function mapStateToProps(state: any) {
    const kindergarten: KindergartenBasic = state.kindergarten;

    return { ...kindergarten };
}

const ConnectedComponent = connect(mapStateToProps)(Kindergarten as any);

export default fetch(fetchData)(ConnectedComponent);
