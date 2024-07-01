import eventModel, { EventType } from "@schema/eventSchema.js";
const getAllEventsByUserId = async (userId: string): Promise<EventType[]> => {
  try {
    const events = await eventModel.find({ user: userId }).lean().exec();
    return events;
  } catch (error) {
    throw new Error(`Error fetching events with userId: ${userId}`);
  }
};

export default getAllEventsByUserId;
