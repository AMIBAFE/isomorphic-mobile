import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as classnames from "classnames";

import fetch from "../../../client/fetch";
import { postLooking } from "../../actions/common";

interface BookingFormState {
    submiting?: boolean;
    courseAvailable?: boolean;
    nameAvailable?: boolean;
    mobileAvailable?: boolean;
    addressAvailable?: boolean;
    ageAvailable?: boolean;
}

class BookingForm extends React.Component<any, BookingFormState> {
    constructor(props: any, context: BookingFormState) {
        super(props, context);

        this.state = {
            submiting: false,
            courseAvailable: true,
            nameAvailable: true,
            mobileAvailable: true,
            addressAvailable: true,
            ageAvailable: true
        };
    }

    handlerSubmit() {
        if (this.state.submiting) return;

        let courseNode: any = this.refs["course"];
        let nameNode: any = this.refs["name"];
        let mobileNode: any = this.refs["mobile"];
        let addressNode: any = this.refs["address"];
        let ageNode: any = this.refs["age"];
        let content = "";
        let courseAvailable = false;
        let nameAvailable = false;
        let mobileAvailable = false;
        let ageAvailable = false;

        if (!courseNode.value) {
            if (!content) content = "请填写您想学什么";
            courseAvailable = false;
        } else {
            courseAvailable = true;
        }
        if (!nameNode.value) {
            if (!content) content = "请填写您的姓名";
            nameAvailable = false;
        } else {
            nameAvailable = true;
        }
        if (!mobileNode.value) {
            if (!content) content = "请填写您的手机号码";
            mobileAvailable = false;
        } else if (!/^1\d{10}$/.test(mobileNode.value)) {
            if (!content) content = "请填写正确的手机号码";
            mobileAvailable = false;
        } else {
            mobileAvailable = true;
        }
        if (
            ageNode.value &&
            !/^(?:[1-9][0-9]?|1[01][0-9]|120)$/.test(ageNode.value)
        ) {
            if (!content) content = "年龄应该为数字";
            ageAvailable = false;
        } else {
            ageAvailable = true;
        }

        this.setState(
            {
                courseAvailable,
                nameAvailable,
                mobileAvailable,
                ageAvailable
            },
            () => {
                if (content) {
                    alert(content);
                    return;
                }

                this.setState(
                    {
                        submiting: true
                    },
                    () => {
                        postLooking({
                            mark: courseNode.value.trim(),
                            name: nameNode.value.trim(),
                            mobile: mobileNode.value.trim(),
                            location: addressNode.value.trim(),
                            age: parseInt(ageNode.value.trim())
                        })
                            .then(() => {
                                alert("提交成功，即将跳转至首页");
                            })
                            .handle(() => {
                                this.setState({
                                    submiting: false
                                });
                            })
                            .fail((error: Error) => {
                                alert(error.message);
                            });
                    }
                );
            }
        );
    }

    render() {
        return (
            <div id="booking-form-page">
                <div id="banner">
                    <header>
                        <Link to="/">
                            <img
                                src={require("./logo.png")}
                                alt="全民教育网"
                                className="logo"
                            />
                        </Link>
                        {this.props.city
                            ? <span onClick={this.props.onShowCityModal}>
                                  {this.props.city.chineseName}
                              </span>
                            : null}
                    </header>
                    <img
                        src={require("./banner.png")}
                        alt="找老师上全民教育"
                        className="banner"
                    />
                </div>
                <form id="booking-form">
                    <p>
                        马上填写您的找老师需求 为您推荐的机构或者老师在<b>24小时</b>内联系你
                    </p>

                    <input
                        className={classnames({
                            error: !this.state.courseAvailable
                        })}
                        ref="course"
                        type="text"
                        placeholder="想学什么"
                    />
                    <input
                        className={classnames({
                            error: !this.state.nameAvailable
                        })}
                        ref="name"
                        type="text"
                        placeholder="姓名"
                    />
                    <input
                        className={classnames({
                            error: !this.state.mobileAvailable
                        })}
                        ref="mobile"
                        type="text"
                        placeholder="手机号码（老师将通过该号码找到你）"
                    />
                    <input
                        className={classnames({
                            error: !this.state.addressAvailable
                        })}
                        ref="address"
                        type="text"
                        placeholder="希望上课的地点（就近推荐老师，选填）"
                    />
                    <input
                        className={classnames({
                            error: !this.state.ageAvailable
                        })}
                        ref="age"
                        type="text"
                        placeholder="年龄（选填）"
                    />
                    <input
                        className={classnames({
                            submiting: this.state.submiting
                        })}
                        type="button"
                        value={this.state.submiting ? "提交需求中..." : "立即找好老师"}
                        onClick={this.handlerSubmit.bind(this)}
                    />
                </form>
            </div>
        );
    }
}

const ConnectedComponent = connect()(BookingForm as any);

export default fetch()(ConnectedComponent);
