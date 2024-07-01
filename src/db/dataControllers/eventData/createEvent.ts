import eventModel, { EventType } from "@schema/eventSchema.js";
const createEvent = async (eventData: EventType): Promise<EventType> => {
  try {
    const event = (await eventModel.create(eventData)).toJSON();
    return event;
  } catch (error) {
    throw new Error(`Error creating event: ${eventData}`);
  }
};

export default createEvent;
