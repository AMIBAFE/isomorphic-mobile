import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { string } from "prop-types";
import * as classNames from "classNames";

interface VideoStatic {
    title?: string;
    cover?: string;
    mp4?: string;
    webm?: string;
}

export default class Video extends React.Component<
    VideoStatic,
    { playing: boolean }
> {
    constructor(props: VideoStatic, context: any) {
        super(props, context);
        this.state = {
            playing: false
        };
    }

    handlePlay(multi: boolean) {
        if (multi) {
            this.setState(
                {
                    playing: true
                },
                () => {
                    (this.refs["video"] as any).play();
                }
            );
        }
    }
    handleClose() {
        (this.refs["video"] as any).pause();
        this.setState({
            playing: false
        });
    }

    render() {
        const { title, cover, mp4, webm } = this.props;
        const multi = (mp4 || webm) && true;

        return (
            <div>
                <div
                    onClick={this.handlePlay.bind(this, multi)}
                    className={classNames("video", { multi })}
                    style={{ backgroundImage: `url(${cover})` }}
                >
                    {multi
                        ? <strong>
                              {title}
                          </strong>
                        : null}
                </div>
                {multi
                    ? <div
                          className={classNames("video-player", {
                              playing: this.state.playing
                          })}
                      >
                          <span
                              className="btn-close-player"
                              onClick={this.handleClose.bind(this)}
                          >
                              关闭视频
                          </span>
                          <video
                              preload="auto"
                              poster={cover}
                              ref="video"
                              loop
                              controls
                          >
                              {mp4
                                  ? <source src={mp4} type="video/mp4" />
                                  : null}
                              {webm
                                  ? <source src={webm} type="video/webm" />
                                  : null}
                              <p>你的浏览器暂不支持播放</p>
                          </video>
                      </div>
                    : null}
            </div>
        );
    }
}

(Video as any).propTypes = {
    title: string,
    cover: string,
    mp4: string,
    webm: string
};
