import { RequestHandler } from "express";
import updateEvent from "@datacontrollers/eventData/updateEvent.js";
import { Schema } from "mongoose";

type RequestParams = { id: Schema.Types.ObjectId };
type ResponseBody = {};
type RequestBody = {};
type RequestQueryParams = {};

const putEventHandler: RequestHandler<
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
export default putEventHandler;
