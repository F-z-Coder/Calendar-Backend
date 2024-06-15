import { NextFunction, Request, Response } from "express";
const handleAuthentication = async <T>(
  req: Request,
  res: Response,
  next: NextFunction,
  fn: () => Promise<T>
) => {
  if (!req.isAuthenticated()) {
    res.status(401).json({ error: "Unauthorized Request, Please login" });
  } else {
    try {
      await fn();
    } catch (e) {
      //pass error to error middleware
      next(e);
    }
  }
};

export default handleAuthentication;
