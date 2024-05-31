import express from 'express';
import UserList from '../Controller/user/UserList.js';
import register from '../Controller/user/register.js';
const userRouter = express.Router();

userRouter.get('/', UserList);

userRouter.post('/register', register)



export { userRouter };