import React, { useState } from "react";
import Modal from "../modal/modal";
import * as Styles from "./day-grid-item.styled";
import { useEvents } from "../../utils/hooks/useEvents";

interface IProps {
  day: number;
  currentMonth: number;
  disabled: boolean;
}

const DayGridItem: React.FC<IProps> = ({ day, currentMonth, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { eventsEntities } = useEvents();
  console.log(eventsEntities);
  return (
    <Styles.Container
      onClick={() => !disabled && setIsOpen(true)}
      {...{ disabled }}
    >
      <div className="bubble" />
      <p className="day">{day}</p>
      <Modal
        modalId="day-events-modal"
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
      >
        {`Day: ${day} Month: ${currentMonth}`}
      </Modal>
    </Styles.Container>
  );
};

export default DayGridItem;
