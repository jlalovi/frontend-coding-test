import { useAppSelector, useAppDispatch } from "../redux-hooks-utils";
import { getRandomColor, getRandomUUID } from "../functions";
import { Event } from "../types";
import {
  addEvent,
  removeEventById,
  updateEvent,
} from "../../redux/events-slice";

export const useEvents = () => {
  const dispatch = useAppDispatch();
  const eventsEntityState = useAppSelector((state) => state.events);

  const getEvents = () => {
    const events: Array<Event> = [];
    eventsEntityState.ids.forEach((eventId) => {
      const event = eventsEntityState.entities[eventId];
      event && events.push(event);
    });
    return events;
  };

  return {
    eventsIds: eventsEntityState.ids,
    eventsEntities: eventsEntityState.entities,
    getEvents,
    addEvent: (name: string) =>
      dispatch(
        addEvent({
          id: getRandomUUID(),
          color: getRandomColor(),
          name,
        })
      ),
    removeEventById: (id: string) => dispatch(removeEventById(id)),
    renameEvent: (id: string, name: string) =>
      dispatch(updateEvent({ id, changes: { name } })),
  };
};
