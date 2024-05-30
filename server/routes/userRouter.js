import express from 'express';
import UserList from '../Controller/user/UserList.js';
const userRouter = express.Router();

userRouter.get('/', UserList);

userRouter.get('/page1', UserList)

userRouter.get('/page2', UserList)

userRouter.get('/page3', UserList)

userRouter.get('/page4', UserList)

export { userRouter };