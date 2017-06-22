import * as React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import routesUrl from './routesUrl';
import HomePage from './pages/home/async';
import TeacherPage from './pages/teacher/async';
import CoursePage from './pages/course/async';
import Find from './pages/find/async';
import Cats from './pages/cats/async';
import User from './pages/user/async';
import Search from './pages/search/async';

const routes = (
	<Switch>
		<Route exact path={routesUrl.index} component={HomePage} />
		<Route path={routesUrl.teacherHome} component={TeacherPage} />
		<Route path={routesUrl.courseDetail} component={CoursePage} />
		<Route path={routesUrl.find} component={Find} />
		<Route path={routesUrl.cats} component={Cats} />
		<Route path={routesUrl.user} component={User} />
		<Route path={routesUrl.search} component={Search} />
	</Switch>
);

export default routes;
