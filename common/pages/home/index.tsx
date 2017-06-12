import './index.less';
import * as React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class HomePage extends React.Component<any, any> {
    render() {
        return (
            <div id="homepage">
                it is home page.
            </div>
        )
    }
}

function mapStateToProps(state: any) {
    const { user } = state;

    return {
        user,
    }
}



export default withRouter(connect(mapStateToProps)(HomePage));