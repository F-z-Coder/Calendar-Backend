import { connect } from "mongoose";
import { envConst } from "@consts/envConst.js";
async function connectToDB() {
  try {
    if (envConst.MONGODB_CONNECTION_URL) {
      await connect(envConst.MONGODB_CONNECTION_URL);
      console.log("connection successfull to database");
    }
  } catch (e) {
    console.error("Couldn't connect to Database", e);
  }
}

export default connectToDB;
