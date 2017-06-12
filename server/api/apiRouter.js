import * as express from 'express';
import getUserInfo from './getUserInfo';

const router = express.Router();

router.post('/getUserInfo', getUserInfo);

export default router;