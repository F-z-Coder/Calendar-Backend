import mongoose, { Document, Schema, model } from "mongoose";

export interface EventType extends Document {
  title: string;
  description: string;
  participants: string[];
  date: Date;
  time: Date;
  duration: number;
  notes: string;
  user: mongoose.Types.ObjectId;
}

const eventSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  participants: { type: [String], required: true },
  date: { type: Date, required: true },
  time: { type: Date, required: true },
  duration: { type: Number, required: true },
  notes: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const eventModel = model<Event>("Event", eventSchema);
export default eventModel;
