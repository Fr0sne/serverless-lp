import { Router } from 'express'
import { createUserController } from '../../http/controller/user/create-user-controller';

const userRouter = Router();

userRouter.post('/', createUserController)

export { userRouter }