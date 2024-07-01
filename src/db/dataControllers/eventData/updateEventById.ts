import eventModel, { EventType } from "@schema/eventSchema.js";
const updateEventById = async (
  eventDataToUpdate: EventType
): Promise<EventType | null> => {
  try {
    const updatedEvent = await eventModel
      .findByIdAndUpdate(eventDataToUpdate.id, eventDataToUpdate, {
        new: true,
      })
      .lean()
      .exec();

    return updatedEvent;
  } catch (error) {
    throw new Error(`Error updating event with id: ${eventDataToUpdate.id}`);
  }
};

export default updateEventById;
