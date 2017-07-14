import * as express from "express";
import apisUrl from "../../common/apisUrl";

import login from "./login";
import getUserInfo from "./getUserInfo";
import getRecommendRoles from "./getRecommendRoles";
import getHotRoles from "./getHotRoles";
import getRecommendCourses from "./getRecommendCourses";
import getHotCourses from "./getHotCourses";
import getTeacherDetail from "./getTeacherDetail";
import getStudioInfo from "./getStudioInfo";
import getStudioHomeData from "./getStudioHomeData";
import getStudioCourses from "./getStudioCourses";
import getStudioTeachers from "./getStudioTeachers";
import getCourseDetail from "./getCourseDetail";
import getHotSearchCats from "./getHotSearchCats";
import getFindLists from "./getFindLists";
import getSuggestion from "./getSuggestion";
import getKindergarten from "./getKindergarten";
import submitBookInfo from "./submitBookInfo";

const router = express.Router();

router.post(apisUrl.login, login);
router.post(apisUrl.fetchUser, getUserInfo);
router.post(apisUrl.fetchRecommendRoles, getRecommendRoles);
router.post(apisUrl.fetchHotRoles, getHotRoles);
router.post(apisUrl.fetchRecommendCourses, getRecommendCourses);
router.post(apisUrl.fetchHotCourses, getHotCourses);
router.post(apisUrl.fetchTeacherDetail, getTeacherDetail);
router.post(apisUrl.fetchStudioInfo, getStudioInfo);
router.post(apisUrl.fetchStudioHomeData, getStudioHomeData);
router.post(apisUrl.fetchStudioCourses, getStudioCourses);
router.post(apisUrl.fetchStudioTeachers, getStudioTeachers);
router.post(apisUrl.fetchCourseDetail, getCourseDetail);
router.post(apisUrl.fetchFindLists, getFindLists);
router.post(apisUrl.fetchSuggestion, getSuggestion);
router.post(apisUrl.fetchKindergarten, getKindergarten);
router.post(apisUrl.postLooking, submitBookInfo);

export default router;
