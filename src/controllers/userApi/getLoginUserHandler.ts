import { RequestHandler } from "express";
import { User } from "@schema/userSchema.js";
import getUserById from "@datacontrollers/userData/getUserById.js";

type RequestParams = {};
type ResponseBody = {
  result?: User;
  message?: string;
  error?: string;
};
type RequestBody = {};
type RequestQueryParams = {};

const getLoginUserHandler: RequestHandler<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQueryParams
> = async (req, res) => {
  if (!req.isAuthenticated()) {
    res.status(200).json({ message: "Login Required" });
  } else {
    try {
      const userId = req.user.userid;
      const user = await getUserById(userId);
      //user found
      if (user) {
        res.status(200).json({ result: user });
      } else {
        //if user is deleted in case (manually)
        res.status(404).json({ error: "User not found" });
      }
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).json({ error: e.message });
      }
    }
  }
};

export default getLoginUserHandler;
