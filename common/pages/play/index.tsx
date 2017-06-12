import './index.less'
import * as React from 'react'
import { render } from 'react-dom'

export default class TestPage extends React.Component<any, any> {
    render() {
        return (
            <div id="playpage">
                <p>it is play page.</p>
            </div>
        )
    }
}