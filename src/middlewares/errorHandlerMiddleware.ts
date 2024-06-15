import { ErrorRequestHandler } from "express";

const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  //todo add logic to handle custom error
  console.error("err message", err.message);
  console.error("Error", err);
  if (err instanceof Error) {
    res.status(500).json({ error: err.message });
  }
};
export default errorHandlerMiddleware;
