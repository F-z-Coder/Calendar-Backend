import { RequestHandler } from "express";
import createEvent from "@datacontrollers/eventData/createEvent.js";
import mongoose, { Schema } from "mongoose";
import { EVENT_ERROR_MESSAGE } from "@consts/eventConst.js";
import { EventType } from "@schema/eventSchema.js";
import handleAuthentication from "@utilities/handleAuthentication.js";

type RequestParams = { eventId: string };
type ResponseBody = { result?: EventType; message?: string; error?: string };
type RequestBody = EventType;
type RequestQueryParams = {};

const postEventHandler: RequestHandler<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQueryParams
> = async (req, res, next) => {
  await handleAuthentication(req, res, next, async () => {
    const eventId = req.params.eventId;
    const eventData = req.body;
    // check if event is valid if not it will error cast error
    if (!mongoose.Types.ObjectId.isValid(eventId)) {
      res.status(400).json({ error: EVENT_ERROR_MESSAGE.INVALID_EVENT_ID });
    }
    // change it we create a new event
    const event = await createEvent(eventData);
    if (event) {
      return res.status(200).json({ result: event });
    } else {
      return res
        .status(404)
        .json({ error: EVENT_ERROR_MESSAGE.EVENT_NOT_FOUND });
    }
  });
};

export default postEventHandler;
