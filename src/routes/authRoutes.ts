import { Router } from "express";
import passport from "passport";
import { envConst } from "@consts/envConst.js";
import {
  AUTH_GOOGLE_LOGIN_ENDPOINT,
  AUTH_GOOGLE_REDIRECT_ENDPOINT,
} from "@consts/authConst.js";
const authRouter = Router();

//endpoint routes for /api/v1/auth
authRouter.get(AUTH_GOOGLE_LOGIN_ENDPOINT, passport.authenticate("google"));
authRouter.get(
  AUTH_GOOGLE_REDIRECT_ENDPOINT,
  passport.authenticate("google", {
    successRedirect: envConst.FRONTEND_HOST_URL,
  })
);
//TODO
//if authentication fails, redirect to frontend url with query params loginfailed and then handle login state on forntend
export default authRouter;
