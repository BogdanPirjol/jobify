import express from 'express'
import {
    getUser,
    updateUser
} from '../controllers/userController.js';
import auth from '../middleware/authenticate.js';


const router = express.Router();

router.use(auth);
router.get('/get-user', getUser);
router.patch('/update-user', updateUser);

export default router;