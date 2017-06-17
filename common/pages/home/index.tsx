import './index.less';

import * as React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { array } from 'prop-types';

import { RecommendBasic } from '../../interfaces/common';
import { TeacherBasic } from '../../interfaces/teacher';
import { fetchRecommendTeachers } from '../../actions/teacher';

import fetch from '../../../client/fetch';
import TeacherCard from '../../components/teacher-card';
import { catEntrances } from '../../configs/vars';

interface CatEntrancesProps {
    catEntrances: {
        name: string;
        className: string;
        cid: number;
    }[];
}

class CatEntrances extends React.Component<CatEntrancesProps, any> {
    render() {
        return (
            <div id="entrances">
                {this.props.catEntrances.map((entrance, index) => {
                    return (
                        <Link key={index} to={`/search/${entrance.cid}`}><i className={`icon icon-${entrance.className}`}></i> {entrance.name}</Link>
                    )
                })}
            </div>
        )
    }
}

(CatEntrances as any).propTypes = {
    catEntrances: array.isRequired,
}

interface PropsBasic {
    recommends: TeacherBasic[],
}

class Home extends React.Component<PropsBasic, any> {
    render() {
        return (
            <div id="app-home">
                <CatEntrances catEntrances={catEntrances} />

                <div id="recommend-list">
                    {this.props.recommends.map((recommend, i) => {
                        return (
                            <TeacherCard { ...recommend } key={i} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

const fetchData = ({ dispatch }: { dispatch: Dispatch<any> }) =>
    dispatch(fetchRecommendTeachers({
        pageSize: 10,
    }));


function mapStateToProps(state: any) {
    const recommends = state.recommendTeachers;

    return {
        recommends,
    }
}

(Home as any).propTypes = {
    recommends: array.isRequired,
};

const ConnectedComponent = connect(mapStateToProps)(Home as any);

export default fetch(fetchData)(ConnectedComponent);