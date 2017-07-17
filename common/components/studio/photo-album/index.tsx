import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { string, array, func } from "prop-types";

import { PhotoBasic, PhotoAlbumBasic } from "../../../interfaces/common";

interface PhotoAlbumPropsBasic extends PhotoAlbumBasic {
    onInit(photos: PhotoBasic[]): void;
}

export default class PhotoAlbum extends React.Component<
    PhotoAlbumPropsBasic,
    any
> {
    handleClick(photos: PhotoBasic[]) {
        this.props.onInit(photos);
    }

    render() {
        const { name, desc, photos } = this.props;

        return (
            <li onClick={this.handleClick.bind(this, photos)}>
                <div
                    className="album-cover"
                    style={{
                        backgroundImage: `url(${photos[0].src})`
                    }}
                    data-amount={photos.length}
                />
                <p>
                    {name}
                </p>
            </li>
        );
    }
}
(PhotoAlbum as any).propTypes = {
    name: string,
    desc: string,
    photos: array,
    onInit: func.isRequired
};
