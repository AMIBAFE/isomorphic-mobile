import * as React from "react";
import { Route, Link, Switch } from "react-router-dom";

import routesUrl from "./routesUrl";

import HomePage from "./pages/home/async";
import StudioPage from "./pages/studio/home/async";
import StudioCoursesPage from "./pages/studio/courses/async";
import StudioTeachersPage from "./pages/studio/teachers/async";
import KindergartenPage from "./pages/kindergarten/async";
import TeacherPage from "./pages/teacher/async";
import CoursePage from "./pages/course/async";
import SearchPage from "./pages/search/async";
import LoginPage from "./pages/login/async";
import FindPage from "./pages/find/async";
import CatsPage from "./pages/cats/async";
import UserPage from "./pages/user/async";
import LookingPage from "./pages/look-form";

const routes = (
    <Switch>
        <Route exact path={routesUrl.index} component={HomePage} />
        <Route path={routesUrl.login} component={LoginPage} />
        <Route path={routesUrl.studioCourses} component={StudioCoursesPage} />
        <Route path={routesUrl.studioTeachers} component={StudioTeachersPage} />
        <Route path={routesUrl.studioHome} component={StudioPage} />
        <Route path={routesUrl.teacherHome} component={TeacherPage} />
        <Route path={routesUrl.kindergartenHome} component={KindergartenPage} />
        <Route path={routesUrl.looking} component={LookingPage} />

        <Route path={routesUrl.courseDetail} component={CoursePage} />
        <Route path={routesUrl.search} component={SearchPage} />
        <Route path={routesUrl.find} component={FindPage} />
        <Route path={routesUrl.cats} component={CatsPage} />
        <Route path={routesUrl.user} component={UserPage} />
    </Switch>
);

export default routes;
