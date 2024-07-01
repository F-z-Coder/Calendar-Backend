import { RequestHandler } from "express";
import getAllEventsByUserId from "@datacontrollers/eventData/getAllEventByUserId.js";
import handleAuthentication from "@utilities/handleAuthentication.js";
import { EventType } from "@schema/eventSchema.js";
type RequestParams = {};
type ResponseBody = {
  result?: EventType[];
  message?: string;
  error?: string;
};
type RequestBody = {};
type RequestQueryParams = {};

const getAllEventsHandler: RequestHandler<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQueryParams
> = async (req, res, next) => {
  await handleAuthentication(req, res, next, async () => {
    //user will not undefined
    const userId = req.user!.userid;
    const events = await getAllEventsByUserId(userId);
    res.status(200).json({ result: events });
  });
};
export default getAllEventsHandler;
