import { RequestHandler } from "express";
import { Schema } from "mongoose";

type RequestParams = { id: Schema.Types.ObjectId };
type ResponseBody = {};
type RequestBody = {};
type RequestQueryParams = {};

const deleteEventHandler: RequestHandler<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQueryParams
> = async (req, res) => {};
export default deleteEventHandler;
