import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { string, array, object } from "prop-types";
import fetch from "../../../../client/fetch";
import PhotoSwiper from "../../../../common/components/photoswipe";

import Notices from "../../../components/studio/notice";
import Banner from "../../../components/studio/banner";
import Entrance from "../../../components/studio/entrance";
import VideoCard from "../../../components/video";
import Footer from "../../../components/footer";
import ContactBar from "../../../components/studio/contact-bar";
import StudioAddress from "../../../components/studio/address";
import PhotoAlbum from "../../../components/studio/photo-album";

import {
    VideoStatic,
    PhotoBasic,
    PhotoAlbumBasic
} from "../../../interfaces/common";
import { StudioBasic } from "../../../interfaces/studio";

import { fetchStudioInfo, fetchStudioMedias } from "../../../actions/studio";

class StudioMediasPage extends React.Component<
    {
        studio: StudioBasic;
        videos: VideoStatic[];
        photoAlbums: PhotoAlbumBasic[];
    },
    {
        photos: PhotoBasic[];
    }
> {
    constructor() {
        super();

        this.state = {
            photos: []
        };
    }

    handleShowAlbum(photos: PhotoBasic[]) {
        this.setState({
            photos
        });
    }
    handleCloseAlbum() {
        this.setState({
            photos: []
        });
    }

    render() {
        const { studio, videos, photoAlbums } = this.props;

        return (
            <div id="studio-medias">
                <Notices notices={studio.notices} />
                <Banner src={studio.banner} alt={studio.name} />
                <Entrance sid={studio.id} />
                <section className="video-list">
                    <h2 className="main-title">
                        <strong>机构视频</strong>INSTITUTIONAL VIDEO
                    </h2>
                    {videos &&
                        videos.length &&
                        videos.map((video, index) => {
                            return <VideoCard key={index} {...video} />;
                        })}
                </section>
                <section className="photo-album-list">
                    <h2 className="main-title">
                        <strong>机构相册</strong>INSTITUTIONAL ALBUM
                    </h2>
                    <ul>
                        {photoAlbums &&
                            photoAlbums.length &&
                            photoAlbums.map((album, index) => {
                                return (
                                    <PhotoAlbum
                                        key={index}
                                        {...album}
                                        onInit={this.handleShowAlbum.bind(this)}
                                    />
                                );
                            })}
                    </ul>
                    {this.state.photos && this.state.photos.length
                        ? <PhotoSwiper
                              photos={this.state.photos}
                              onClose={this.handleCloseAlbum.bind(this)}
                          />
                        : null}
                </section>
                <StudioAddress
                    {...{
                        city: studio.city,
                        area: studio.area,
                        address: studio.address
                    }}
                />
                <Footer />
                <ContactBar tels={studio.tels} />
            </div>
        );
    }
}
(StudioMediasPage as any).propTypes = {
    videos: array,
    photoAlbums: array
};

const fetchData = (
    { dispatch }: { dispatch: Dispatch<any> },
    params: { sid: number }
) => {
    dispatch(fetchStudioInfo({ ...params }));
    dispatch(fetchStudioMedias({ ...params }));
};

function mapStateToProps(state: any) {
    const studio: StudioBasic = state.studio;
    const videos: VideoStatic[] = state.studioMedias.videos;
    const photoAlbums: PhotoAlbumBasic[] = state.studioMedias.photoAlbums;

    return {
        studio,
        videos,
        photoAlbums
    };
}

const ConnectedComponent = connect(mapStateToProps)(StudioMediasPage as any);

export default fetch(fetchData)(ConnectedComponent);
