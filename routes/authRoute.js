//setitng express router
import express from 'express';
const router = express.Router();

//import controllers
import {login, logout, register, updateUser} from '../controllers/authController.js';

router.post('/login', login);
router.post('/register', register);
router.get('/logout', logout);
router.patch('/update', updateUser);

export default router;