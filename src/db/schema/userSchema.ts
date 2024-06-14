import mongoose, { Document, Schema } from "mongoose";

export interface User extends Document {
  _id: string;
  email: string;
  name: string;
  picture: string;
  events: mongoose.Types.ObjectId[];
}

const userSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  picture: { type: String, required: true },
  events: [
    { type: mongoose.Schema.Types.ObjectId, ref: "EventType", default: [] },
  ],
});

const userModel = mongoose.model<User>("User", userSchema);
export default userModel;
