import "./index.less";

import * as React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Link } from "react-router-dom";
import { number, string, array, object, bool } from "prop-types";

import { TeacherBasic } from "../../interfaces/teacher";

import { getSuggestion } from "../../actions/search";
import fetch from "../../../client/fetch";

class AutoComplete extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {
        const { AutoCompleteList } = this.props;
        console.log(AutoCompleteList);
        return (
            <div id="autoComplete" className="autoComplete">
                这里是输入框
            </div>
        );
    }
}

const fetchData = (
    { dispatch }: { dispatch: Dispatch<any> },
    params: { keyword: string }
) => dispatch(getSuggestion({ ...params }));

function mapStateToProps(state: any) {
    const results = state.results;
    return { ...results };
}
const ConnectedComponent = connect(mapStateToProps)(AutoComplete as any);

export default fetch(fetchData)(ConnectedComponent);
