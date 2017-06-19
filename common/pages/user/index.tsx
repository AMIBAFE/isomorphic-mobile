import './index.less';

import * as React from 'react';
import { render } from 'react-dom';

export default class Find extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
    }
    render() {
        return (
           <div id="user">
            <p>我的个人中心页测试 </p>
           </div>
        );
    }

}

