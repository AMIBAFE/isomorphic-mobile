import * as React from "react";
import { Route, Link, Switch } from "react-router-dom";

import routesUrl from "./routesUrl";
import HomePage from "./pages/home/async";
import TeacherPage from "./pages/teacher/async";
import CoursePage from "./pages/course/async";

import SearchPage from "./pages/search/async";
import LoginPage from "./pages/login/async";
import FindPage from "./pages/find/async";
import CatsPage from "./pages/cats/async";
import UserPage from "./pages/user/async";

const routes = (
    <Switch>
        <Route exact path={routesUrl.index} component={HomePage} />
        <Route path={routesUrl.login} component={LoginPage} />
        <Route path={routesUrl.teacherHome} component={TeacherPage} />
        <Route path={routesUrl.courseDetail} component={CoursePage} />
        <Route path={routesUrl.search} component={SearchPage} />
        <Route path={routesUrl.find} component={FindPage} />
        <Route path={routesUrl.cats} component={CatsPage} />
        <Route path={routesUrl.user} component={UserPage} />
    </Switch>
);

export default routes;
