import Express from 'express';
import getUserInfo from './getUserInfo';

const router = Express.Router();

router.post('/getUserInfo', getUserInfo);

export default router;