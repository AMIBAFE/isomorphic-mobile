import "./index.less";

import * as photoswipe from "photoswipe";
import * as photoswipe_ui from "photoswipe/dist/photoswipe-ui-default";
import * as React from "react";
import { render } from "react-dom";
import { number, array, func } from "prop-types";

import { PhotoBasic } from "../../interfaces/common";

interface PhotoSwiperPropsBasic {
    photos: PhotoBasic[];
    onClose(): void;
    index?: number;
}

export default class PhotoSwiper extends React.Component<
    PhotoSwiperPropsBasic,
    any
> {
    gallery: PhotoSwipe<any>;

    componentDidMount() {
        let _self = this;
        this.gallery && this.gallery.destroy();

        let pswpElement: any = this.refs["swiper"];
        let items = this.props.photos;
        let galleryOptions: any = {
            index: this.props.index || 0,
            loop: true,
            pinchToClose: false,
            history: false,
            tapToClose: false,
            closeEl: true,
            captionEl: true,
            fullscreenEl: false,
            zoomEl: false,
            shareEl: false,
            counterEl: true,
            arrowEl: false,
            preloaderEl: false,
            spacing: 0.05
        };

        let gallery = new photoswipe(
            pswpElement,
            photoswipe_ui,
            items,
            galleryOptions
        );
        gallery.init();
        gallery.listen("close", function() {
            _self.props.onClose();
        });

        this.gallery = gallery;
    }

    render() {
        return (
            <section className="pswp swiper" ref="swiper">
                <div className="pswp__bg" />
                <div className="pswp__scroll-wrap">
                    <div className="pswp__container">
                        <div className="pswp__item" />
                        <div className="pswp__item" />
                        <div className="pswp__item" />
                    </div>
                    <div className="pswp__ui pswp__ui--hidden">
                        <div className="pswp__top-bar">
                            <span
                                className="pswp__button pswp__button--close"
                                title="Close (Esc)"
                            />
                            <div className="pswp__counter" />
                        </div>
                        <div className="pswp__caption">
                            <div className="pswp__caption__center" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

(PhotoSwiper as any).propTypes = {
    photos: array.isRequired,
    onClose: func.isRequired,
    index: number
};
