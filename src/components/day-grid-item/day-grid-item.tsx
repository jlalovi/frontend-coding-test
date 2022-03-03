import React from "react";
import Styles from "./day-grid-item.styled";

interface IProps {
  day: number;
  disabled: boolean;
}

const DayGridItem: React.FC<IProps> = ({ day, disabled }) => {
  return (
    <Styles.Container {...{ disabled }}>
      <div className="bubble" />
      <p className="day">{day}</p>
    </Styles.Container>
  );
};

export default DayGridItem;
