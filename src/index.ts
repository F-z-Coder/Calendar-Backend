import express from "express";
import connectToDB from "./utilities/connectToDB.js";
import { EVENT_BASE_URL } from "./consts/eventConst.js";
import { envConst } from "./consts/envConst.js";
import eventRouter from "./routes/eventRoutes.js";
const app = express();

connectToDB();

app.use(express.json());
app.use(EVENT_BASE_URL, eventRouter);

app.listen(envConst.PORT, () => {
  console.log("server started on port", envConst.PORT);
});
