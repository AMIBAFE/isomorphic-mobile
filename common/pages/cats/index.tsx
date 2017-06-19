import './index.less';

import * as React from 'react';
import { render } from 'react-dom';

export default class Find extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
    }
    render() {
        return (
           <div id="cats">
            <p>cats页 科目页</p>
           </div>
        );
    }

}

