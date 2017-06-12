import * as React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import HomePage from './pages/home/index.tsx';
import TestPage from './pages/test/index.tsx';
import PlayPage from './pages/play/index.tsx';

const routes = (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route path="/test" component={TestPage} />
		<Route path="/play" component={PlayPage} />
	</Switch>
);

export default routes;
