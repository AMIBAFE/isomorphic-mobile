import * as express from 'express';
import apisUrl from '../../common/apisUrl';

import getUserInfo from './getUserInfo';
import getRecommends from './getRecommends';
const router = express.Router();

router.post(apisUrl.fetchUser, getUserInfo);
router.post(apisUrl.fetchRecommend, getRecommends);

export default router;