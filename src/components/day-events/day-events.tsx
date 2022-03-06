import React from "react";
/* import * as Styles from "./day-events.styled"; */
import { useDaysEvents } from "../../utils/hooks/useDaysEvents";
import EventListItem from "../event-list-item/event-list-item";

interface IProps {
  dayId: string;
}

const DayEvents: React.FC<IProps> = ({ dayId }) => {
  const { getEventsInDay } = useDaysEvents();
  const eventsInDay = getEventsInDay(dayId);
  console.log(eventsInDay);
  return (
    <ul>
      {eventsInDay.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default DayEvents;
