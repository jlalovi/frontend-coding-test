import React from "react";
import * as Styles from "./event-list-item.styled";
import { Event } from "../../utils/types";

interface IProps {
  event: Event;
  onClick?: () => void;
}

const EventListItem: React.FC<IProps> = ({ event, onClick }) => {
  return (
    <Styles.EventListItem
      title={event.name}
      onClick={onClick}
      key={event.id}
      color={event.color}
    >
      <div className="color" />
      <p className="text">{event.name}</p>
    </Styles.EventListItem>
  );
};

export default EventListItem;
