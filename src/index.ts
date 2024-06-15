import express from "express";
import cors from "cors";
import connectToDB from "./utilities/connectToDB.js";
import sessionMiddleware from "middlewares/sessionMiddleware.js";
import authenticationMiddleware from "middlewares/authenticationMiddleware.js";
import authRouter from "@routes/authRoutes.js";
import userRouter from "@routes/userRoutes.js";
import eventRouter from "./routes/eventRoutes.js";
import { AUTH_BASE_URL } from "@consts/authConst.js";
import { USER_BASE_URL } from "@consts/userConst.js";
import { EVENT_BASE_URL } from "./consts/eventConst.js";
import { envConst } from "./consts/envConst.js";
import errorHandlerMiddleware from "middlewares/errorHandlerMiddleware.js";
const app = express();

connectToDB();
//cors policy
app.use(cors({ origin: envConst.FRONTEND_HOST_URL, credentials: true }));

//handle login session
app.use(sessionMiddleware);

//authenticate request using session
app.use(authenticationMiddleware.session());

app.use(express.json());

app.use(AUTH_BASE_URL, authRouter);
app.use(USER_BASE_URL, userRouter);
app.use(EVENT_BASE_URL, eventRouter);

// Error handling middleware should be the last one
app.use(errorHandlerMiddleware);

app.listen(envConst.PORT, () => {
  console.log("server started on port", envConst.PORT);
});
