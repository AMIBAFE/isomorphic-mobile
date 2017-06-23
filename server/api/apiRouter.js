import * as express from 'express';
import apisUrl from '../../common/apisUrl';

import login from './login';
import getUserInfo from './getUserInfo';
import getRecommendTeachers from './getRecommendTeachers';
import getTeacherDetail from './getTeacherDetail';
const router = express.Router();

router.post(apisUrl.login, login);
router.post(apisUrl.fetchUser, getUserInfo);
router.post(apisUrl.fetchRecommendTeachers, getRecommendTeachers);
router.post(apisUrl.fetchTeacherDetail, getTeacherDetail);

export default router;