import './index.less';
import * as React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';

class Home extends React.Component<any, any> {
    render() {
        return (
            <div id="homepage">
                hi {this.props.user.name}, it is home page.
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

(Home as any).propTypes = {
    user: object.isRequired,
};

export default withRouter(connect(mapStateToProps)(Home));