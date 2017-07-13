import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

export default class Footer extends React.Component<any, any> {
    render() {
        return (
            <div>
                <section id="label-part">
                    <ul>
                        <li>
                            <a href="http://qmin91.com">
                                <strong>91全民教育网</strong>机构合作平台
                            </a>
                        </li>
                        <li>
                            <strong>优质教育机构</strong>教育领域知名品牌
                        </li>
                    </ul>
                </section>
                <section id="copyright-part">
                    <p>
                        Copyright© 2015-2017 猫鼬网络科技有限公司 All Rights Reserved
                        <a href="http://www.miitbeian.gov.cn/">
                            粤ICP备15090983号
                        </a>
                    </p>
                </section>
            </div>
        );
    }
}
