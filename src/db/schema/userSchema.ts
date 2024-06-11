import mongoose, { Document, Schema } from "mongoose";

interface User extends Document {
  email: string;
  events: mongoose.Types.ObjectId[];
}

const userSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
});

const userModel = mongoose.model<User>("User", userSchema);
export default userModel;
