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
            {routesApp}
        </BrowserRouter>
    </Provider>),
    document.getElementById('container'),
    () => {
        delete (window as any).__INITIAL_STATE__;
    }
);