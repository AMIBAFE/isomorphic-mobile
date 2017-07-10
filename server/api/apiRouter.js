import * as express from "express";
import apisUrl from "../../common/apisUrl";

import login from "./login";
import getUserInfo from "./getUserInfo";
import getRecommendRoles from "./getRecommendRoles";
import getRecommendCourses from "./getRecommendCourses";
import getTeacherDetail from "./getTeacherDetail";
import getStudioDetail from "./getStudioDetail";
import getCourseDetail from "./getCourseDetail";
import getHotSearchCats from "./getHotSearchCats";
import getFindLists from "./getFindLists";
import getSuggestion from "./getSuggestion";
const router = express.Router();

router.post(apisUrl.login, login);
router.post(apisUrl.fetchUser, getUserInfo);
router.post(apisUrl.fetchRecommendRoles, getRecommendRoles);
router.post(apisUrl.fetchRecommendCourses, getRecommendCourses);
router.post(apisUrl.fetchTeacherDetail, getTeacherDetail);
router.post(apisUrl.fetchStudioDetail, getStudioDetail);
router.post(apisUrl.fetchCourseDetail, getCourseDetail);
router.post(apisUrl.fetchFindLists, getFindLists);
router.post(apisUrl.fetchSuggestion, getSuggestion);

export default router;
