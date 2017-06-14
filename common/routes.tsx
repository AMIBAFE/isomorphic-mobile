import * as React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import HomePage from './pages/home/async';
import TestPage from './pages/test/index';
import PlayPage from './pages/play/index';

const routes = (
	<Switch>
		<p><Link to="/">home page</Link></p>
		<p><Link to="/play">play page</Link></p>
		<p><Link to="/test">test page</Link></p>

		<Route exact path="/" component={HomePage} />
		<Route path="/test" component={TestPage} />
		<Route path="/play" component={PlayPage} />
	</Switch>
);

export default routes;
