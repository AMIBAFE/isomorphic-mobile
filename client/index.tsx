import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';

import storeApp from '../common/configStore';
import routesApp from '../common/routes';

const initState = (window as any).__INITIAL_STATE__;
const store = storeApp(initState);

render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <p><Link to="/">home page</Link></p>
                <p><Link to="/play">play page</Link></p>
                <p><Link to="/test">test page</Link></p>
                {routesApp}
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('container'),
    () => {
        delete (window as any).__INITIAL_STATE__;
    }
);