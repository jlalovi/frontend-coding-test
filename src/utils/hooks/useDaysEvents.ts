import { useAppSelector, useAppDispatch } from "../redux-hooks-utils";
import { addDayEvent } from "../../redux/days-events-slice";

export const useDaysEvents = () => {
  const dispatch = useAppDispatch();
  const daysEventsIds = useAppSelector(
    (state) => state.daysEvents.daysEventsIds
  );

  const getEventsIdsInDay = (dayId: string) => {
    return daysEventsIds[dayId] ?? [];
  };

  return {
    getEventsIdsInDay,
    addDayEvent: (dayId: string, eventId: string) =>
      dispatch(addDayEvent({ dayId, eventId })),
  };
};
