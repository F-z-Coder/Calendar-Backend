import eventModel, { EventType } from "@schema/eventSchema.js";
const deleteEventById = async (eventId: string): Promise<EventType | null> => {
  try {
    const result = await eventModel.findByIdAndDelete(eventId).lean().exec();
    return result;
  } catch (error) {
    throw new Error(`Error deleting event with id: ${eventId}`);
  }
};

export default deleteEventById;
