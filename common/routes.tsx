import * as React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import routesUrl from './routesUrl';
import HomePage from './pages/home/async';
import TeacherPage from './pages/teacher/async';
import coursePage from './pages/course/async';

const routes = (
	<Switch>
		<Route exact path={routesUrl.index} component={HomePage} />
		<Route path={routesUrl.teacherHome} component={TeacherPage} />
		<Route path={routesUrl.courseDetail} component={coursePage} />
	</Switch>
);

export default routes;
