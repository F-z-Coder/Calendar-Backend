import { RequestHandler } from "express";
import { Schema } from "mongoose";
import getEvent from "@datacontrollers/eventData/getEvent.js";

type RequestParams = { id: Schema.Types.ObjectId };
type ResponseBody = {};
type RequestBody = {};
type RequestQueryParams = {};

const getEventHandler: RequestHandler<
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

export default getEventHandler;
