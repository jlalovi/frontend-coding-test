import { useAppSelector, useAppDispatch } from "../redux-hooks-utils";
import { addDayEvent, removeDayEvent } from "../../redux/days-events-slice";
import { Event } from "../../utils/types";

export const useDaysEvents = () => {
  const dispatch = useAppDispatch();
  const daysEventsIds = useAppSelector(
    (state) => state.daysEvents.daysEventsIds
  );
  const eventsEntities = useAppSelector((state) => state.events.entities);

  const getEventsIdsInDay = (dayId: string) => {
    return daysEventsIds[dayId] ?? [];
  };

  const getEventsInDay = (dayId: string) => {
    const eventsIdsInDay = getEventsIdsInDay(dayId);
    const eventsInDay: Event[] = [];
    eventsIdsInDay.forEach((eventId) => {
      const event = eventsEntities[eventId];
      if (event) {
        eventsInDay.push(event);
      }
    });
    return eventsInDay;
  };

  const addNewDayEvent = (dayId: string, eventId: string) => {
    const eventsIdsInDay = getEventsIdsInDay(dayId);
    const isNewEvent = eventsIdsInDay.includes(eventId);
    if (!isNewEvent) {
      dispatch(addDayEvent({ dayId, eventId }));
    }
  };

  return {
    getEventsIdsInDay,
    getEventsInDay,
    addDayEvent: addNewDayEvent,
    removeDayEvent: (dayId: string, eventId: string) =>
      dispatch(removeDayEvent({ dayId, eventId })),
  };
};
