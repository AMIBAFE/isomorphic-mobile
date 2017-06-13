import * as express from 'express';
import apisUrl from '../../common/apisUrl';
import getUserInfo from './getUserInfo';

const router = express.Router();

router.post(apisUrl.fetchUser, getUserInfo);

export default router;