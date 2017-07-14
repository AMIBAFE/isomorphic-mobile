import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { string, bool, number, func, array } from "prop-types";

import { catBasic } from "../../interfaces/cat";
import { fetchFindLists } from "../../actions/find";

import fetch from "../../../client/fetch";

interface findListsProps {
    findLists: catBasic[];
}

class Find extends React.Component<findListsProps, any> {
    constructor(props: findListsProps, context: any) {
        super(props, context);
    }
    render() {
        const { findLists } = this.props;
        console.log(findLists);
        return (
            <div id="find-wrapper">
                <div className="find-content-wrapper">
                    {findLists.map((list, i) => {
                        return (
                            <Link
                                key={list.id}
                                className="find-item"
                                to={`/course/${list.id}`}
                                style={{
                                    backgroundImage: `url(${list.cover})`
                                }}
                            >
                                <div className="find-intro">
                                    <p className="find-title">
                                        {list.label}
                                    </p>
                                    <p className="find-category">
                                        {list.description}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    }
}
(Find as any).propTypes = {
    findLists: array.isRequired
};

const fetchData = ({ dispatch }: { dispatch: Dispatch<any> }) =>
    dispatch(fetchFindLists());

function mapStateToProps(state: any) {
    const findLists = state.findLists;
    return {
        findLists
    };
}
const ConnectedComponent = connect(mapStateToProps)(Find as any);

export default fetch(fetchData)(ConnectedComponent);
