import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import * as classNames from "classNames";
import { string, array } from "prop-types";

interface ContactPropsBasic {
    tels: string[];
}
interface ContactStatesBasic {
    showBookPopup: boolean;
    showCallPopup: boolean;
}
export default class Contact extends React.Component<
    ContactPropsBasic,
    ContactStatesBasic
> {
    constructor(props: ContactPropsBasic, context: ContactStatesBasic) {
        super(props, context);

        this.state = {
            showBookPopup: false,
            showCallPopup: false
        };
    }

    handleToggleBookPopup() {
        this.setState({
            showBookPopup: !this.state.showBookPopup
        });
    }
    handleToggleCallPopup() {
        this.setState({
            showCallPopup: !this.state.showCallPopup
        });
    }

    render() {
        return (
            <div>
                <section id="contact-label-bar">
                    <span onClick={this.handleToggleBookPopup.bind(this)}>
                        免费预约课程
                    </span>
                    {this.props.tels
                        ? this.props.tels.length > 1
                          ? <span
                                onClick={this.handleToggleCallPopup.bind(this)}
                            >
                                在线电话咨询
                            </span>
                          : <a href={`tel:${this.props.tels[0]}`}>在线电话咨询</a>
                        : ""}
                </section>
                <section
                    id="book-popup"
                    className={classNames({
                        hidden: !this.state.showBookPopup
                    })}
                >
                    <form>
                        <span
                            className="btn-close"
                            onClick={this.handleToggleBookPopup.bind(this)}
                        />
                        <fieldset>
                            <legend>免费预约</legend>
                            <label>
                                姓名：<input
                                    type="text"
                                    name="student"
                                    placeholder="您的姓名"
                                />
                            </label>
                            <label>
                                电话：<input
                                    type="text"
                                    name="mobile"
                                    placeholder="您的手机号码"
                                />
                            </label>
                            <label>
                                课程：<input
                                    type="text"
                                    name="course"
                                    placeholder="您想学的课程名"
                                />
                            </label>
                        </fieldset>
                        <span className="btn-submit J-btn-submit">在线预约教师</span>
                    </form>
                </section>
                <div
                    id="call-popup"
                    className={classNames({
                        hidden: !this.state.showCallPopup
                    })}
                >
                    <ul>
                        {this.props.tels &&
                            this.props.tels.map((tel, index) => {
                                return (
                                    <li key={index}>
                                        <a href="tel:{{ tel }}">
                                            {tel}
                                        </a>
                                    </li>
                                );
                            })}
                        <li onClick={this.handleToggleCallPopup.bind(this)}>
                            取消
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
(Contact as any).propTypes = {
    tels: array
};
