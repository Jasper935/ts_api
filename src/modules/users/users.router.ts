import { Router } from 'express';
import usersController from './users.controller.js';


const router =  Router();

router.post('/', usersController.createUser)
router.get('/', usersController.getUsers)

export default router
