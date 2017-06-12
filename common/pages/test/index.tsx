import './index.less'
import * as React from 'react'
import { render } from 'react-dom'

export default class TestPage extends React.Component<any, any> {
    render() {
        return (
            <div id="testpage">
                <p>it is testpage.</p>
            </div>
        )
    }
}