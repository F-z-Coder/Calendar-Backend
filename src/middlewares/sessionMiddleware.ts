import { envConst } from "@consts/envConst.js";
import session, { SessionOptions } from "express-session";

const sessionOptions: SessionOptions = {
  secret: envConst.COOKIE_SECRET,
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds,
  },
};

const sessionMiddleware = session(sessionOptions);

export default sessionMiddleware;
