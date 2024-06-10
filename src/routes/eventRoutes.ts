import deleteEventHandler from "@controllers/eventApi/deleteEventHandler.js";
import getEventHandler from "@controllers/eventApi/getEventHandler.js";
import postEventHandler from "@controllers/eventApi/postEventHandler.js";
import putEventHandler from "@controllers/eventApi/putEventHandler.js";
import express from "express";

const eventRouter = express.Router();
//endpoint routes for /api/v1/event
eventRouter.get("/:eventID", getEventHandler);
eventRouter.post("/:eventID", postEventHandler);
eventRouter.put("/:eventID", putEventHandler);
eventRouter.delete("/:eventID", deleteEventHandler);

export default eventRouter;
