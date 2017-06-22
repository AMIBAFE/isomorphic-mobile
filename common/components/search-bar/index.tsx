import './index.less';

import * as React from 'react';
import { render } from 'react-dom';

let Component = React.Component,
    PropTypes = React.PropTypes;

let contacts = [
    {
        name: 'Jimmy',
        email: "Jaimg@gmail.com"
    },
    {
        name: 'Sam',
        email: "geg@gmail.com"
    },
    {
        name: 'Micheal',
        email: "faeadg@gmail.com"
    },
    {
        name: 'Paly',
        email: "aqgaageg@gmail.com"
    },
]
class Prompt extends Comment {
    render() {

        let search = this.props.search.trim(),
            content = this.props.content;
        // 获取父组件的search内容，对需要搜索的内容进行匹配，
        if(search) {
            content = content.filter( (val) => {
                return val.name.indexOf(search) == -1 ? false:true;
            })
        } else {
            content = [];
        }

        return (
            <ul>
                {
                    content.map((val, i) => {
                        return (
                            <li key={i}>{val.name} {val.email}</li>
                        )
                    })
                }
            </ul>
        )

    }
}
class Search extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);

        this.state = {
            input: ''
        }
    }
    /**
     * this.state.input 用来代指输入的内容
     * this.props.children 硬编码的搜索内容
     */
    render() {
        return (
            <div>
                <input value={this.state.input} onChange={this.selectPrompt.bind(this)} />
                <Prompt content={this.props.children} search={this.state.input}/>
            </div>
        )
    }

    selectPrompt(e) {
        this.setState({
            input: e.target.value
        });
    }
}
