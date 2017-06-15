import './index.less';

import * as React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { array } from 'prop-types';

import { RecommendBasic } from '../../interfaces/common';
import { fetchRecommend } from '../../actions/common';

import fetch from '../../../client/fetch';
import ProfileCard from '../../components/profile-card';

interface PropsBasic {
    recommends: RecommendBasic[],
}

class Home extends React.Component<PropsBasic, any> {
    render() {
        return (
            <div id="recommend-list">
                {this.props.recommends.map((recommend, i) => {
                    return (
                        <ProfileCard { ...recommend } key={i} />
                    )
                })}
            </div>
        )
    }
}

const fetchData = ({ dispatch }: { dispatch: Dispatch<any> }) =>
    dispatch(fetchRecommend({
        pageSize: 10,
    }));


function mapStateToProps(state: any) {
    const recommendsResponse = state.recommends;

    return {
        recommends: recommendsResponse.recommends,
    }
}

(Home as any).propTypes = {
    recommends: array.isRequired,
};

const ConnectedComponent = connect(mapStateToProps)(Home as any);

export default fetch(fetchData)(ConnectedComponent);