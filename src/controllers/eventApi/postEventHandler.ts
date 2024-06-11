import { RequestHandler } from "express";
import createEvent from "@datacontrollers/eventData/createEvent.js";
import { Schema } from "mongoose";

type RequestParams = { id: Schema.Types.ObjectId };
type ResponseBody = {};
type RequestBody = {};
type RequestQueryParams = {};

const postEventHandler: RequestHandler<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQueryParams
> = async (req, res) => {
  const requestParms = req.params;
  const queryParms = req.query;
  const reqBody = req.body;
  return res.status(200);
};

export default postEventHandler;
