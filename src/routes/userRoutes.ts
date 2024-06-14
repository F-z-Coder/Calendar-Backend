import { Router } from "express";
import { USER_lOGIN_ENDPOINT } from "@consts/userConst.js";
import getLoginUserHandler from "@controllers/userApi/getLoginUserHandler.js";

const userRouter = Router();
//endpoint routes for /api/v1/user
userRouter.get(USER_lOGIN_ENDPOINT, getLoginUserHandler);
export default userRouter;
