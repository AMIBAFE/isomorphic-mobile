/* global window */

import * as React from "react";
import { object } from "prop-types";
import * as hoistStatics from "hoist-non-react-statics";

const getDisplayName = WrappedComponent =>
    WrappedComponent.displayName || WrappedComponent.name || "Component";

export default function fetch(fn) {
    return WrappedComponent => {
        class FetchOnLoad extends React.Component {
            componentDidMount() {
                if (!window.__INITIAL_STATE__) {
                    fn(this.context.store, this.props.params);
                }
            }

            render() {
                return <WrappedComponent {...this.props} />;
            }
        }

        FetchOnLoad.contextTypes = {
            store: object.isRequired
        };

        FetchOnLoad.displayName = `Fetch(${getDisplayName(WrappedComponent)})`;

        FetchOnLoad.fetch = fn;

        return hoistStatics(FetchOnLoad, WrappedComponent);
    };
}
