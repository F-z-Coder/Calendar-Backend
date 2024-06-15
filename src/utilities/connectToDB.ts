import { connect } from "mongoose";
import { envConst } from "@consts/envConst.js";
async function connectToDB() {
  try {
    await connect(envConst.MONGODB_CONNECTION_URL);
    console.log("Connection successfull to database");
  } catch (e) {
    console.error("Couldn't connect to Database", e);
  }
}

export default connectToDB;
