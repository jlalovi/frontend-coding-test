import React, { useState } from "react";
import Modal from "../modal/modal";
import * as Styles from "./day-grid-item.styled";
import DayEventsModal from "../day-events-modal/day-events-modal";
import DayEvents from "../day-events/day-events";

interface IProps {
  day: number;
  currentMonth: number;
  disabled: boolean;
}

const DayGridItem: React.FC<IProps> = ({ day, currentMonth, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dayId = `${currentMonth}-${day}`;
  const currentDay = new Date().getDate();
  return (
    <Styles.Container
      onClick={() => !disabled && setIsOpen(true)}
      disabled={disabled}
      isCurrentDay={currentDay === day}
    >
      <div className="bubble" />
      <p className="day">{day}</p>
      {!disabled && <DayEvents dayId={dayId} />}
      <Modal
        modalId="day-events-modal"
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
      >
        <DayEventsModal dayId={dayId} day={day} currentMonth={currentMonth} />
      </Modal>
    </Styles.Container>
  );
};

export default DayGridItem;
