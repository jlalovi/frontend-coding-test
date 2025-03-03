import React from "react";
import * as Styles from "./day-events-modal.styled";
import { useDaysEvents } from "../../utils/hooks/useDaysEvents";
import { MONTH_NAMES } from "../../utils/calendar";
import { useEvents } from "../../utils/hooks/useEvents";
import EventListItem from "../event-list-item/event-list-item";

interface IProps {
  day: number;
  currentMonth: number;
  dayId: string;
}

const DayEventsModal: React.FC<IProps> = ({ dayId, day, currentMonth }) => {
  const { getEventsInDay, addDayEvent, removeDayEvent } = useDaysEvents();
  const { getEvents } = useEvents();
  const events = getEvents();
  const eventsInDay = getEventsInDay(dayId);

  return (
    <Styles.Container>
      <Styles.Title>{`${day} of ${MONTH_NAMES[currentMonth]}`}</Styles.Title>
      <Styles.AddEventsContainer>
        <Styles.AllEventsList>
          {events.map((event) => (
            <EventListItem
              key={event.id}
              onClick={() => addDayEvent(dayId, event.id)}
              event={event}
            />
          ))}
        </Styles.AllEventsList>
        <Styles.DayEventsList>
          {eventsInDay.map((event) => (
            <EventListItem
              key={event.id}
              onClick={() => removeDayEvent(dayId, event.id)}
              event={event}
            />
          ))}
        </Styles.DayEventsList>
      </Styles.AddEventsContainer>
    </Styles.Container>
  );
};

export default DayEventsModal;
