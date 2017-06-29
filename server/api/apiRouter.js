import * as express from "express";
import apisUrl from "../../common/apisUrl";

import login from "./login";
import getUserInfo from "./getUserInfo";
import getRecommendTeachers from "./getRecommendTeachers";
import getTeacherDetail from "./getTeacherDetail";
import getCourseDetail from "./getCourseDetail";
import getHotSearchCats from "./getHotSearchCats";
const router = express.Router();

router.post(apisUrl.login, login);
router.post(apisUrl.fetchUser, getUserInfo);
router.post(apisUrl.fetchRecommendTeachers, getRecommendTeachers);
router.post(apisUrl.fetchTeacherDetail, getTeacherDetail);
router.post(apisUrl.fetchCourseDetail, getCourseDetail);
router.post(apisUrl.fetchHotSearchCats, getHotSearchCats);

export default router;
