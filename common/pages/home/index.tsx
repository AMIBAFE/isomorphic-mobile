import './index.less';

import * as React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { object } from 'prop-types';
import { fetchUser } from '../../actions/common';
import fetch from '../../../client/fetch';

class Home extends React.Component<any, any> {
    render() {
        return (
            <div id="homepage">
                hi {this.props.user.name}, it is home page. hahaha, you got be kidding me?
            </div>
        )
    }
}

// const fetchData = ({ dispatch }: { dispatch: Dispatch<any> }) =>
//     dispatch(fetchUser());


function mapStateToProps(state: any) {
    const { user } = state;

    return {
        user,
    }
}

(Home as any).propTypes = {
    user: object.isRequired,
};

export default connect(mapStateToProps)(Home);

// const ConnectedComponent = connect(mapStateToProps)(Home);

// export default fetch(fetchData)(ConnectedComponent);