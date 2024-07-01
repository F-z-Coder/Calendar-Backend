import eventModel, { EventType } from "@schema/eventSchema.js";
const getEventById = async (eventId: string): Promise<EventType | null> => {
  try {
    const event = await eventModel.findById(eventId).lean().exec();
    return event;
  } catch (error) {
    throw new Error(`Error fetching event with id: ${error}`);
  }
};

export default getEventById;
