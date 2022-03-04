import React, { useState } from "react";
import { MONTH_NAMES, showCalendar } from "../../utils/calendar";
import DayGridItem from "../day-grid-item/day-grid-item";
import * as Styles from "./month-grid.styled";
import { ArrowLeftCircle } from "@styled-icons/bootstrap/ArrowLeftCircle";
import { ArrowRightCircle } from "@styled-icons/bootstrap/ArrowRightCircle";

const MonthGrid: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const currentYear = new Date().getFullYear();
  const currentCalendar = showCalendar(currentMonth, currentYear);

  return (
    <Styles.Container>
      <Styles.TopBar>
        <Styles.Title>{MONTH_NAMES[currentMonth]}</Styles.Title>
        <Styles.ButtonGroup>
          <ArrowLeftCircle
            size={40}
            onClick={() =>
              currentMonth > 0 && setCurrentMonth(currentMonth - 1)
            }
          />
          <ArrowRightCircle
            size={40}
            onClick={() =>
              currentMonth < 11 && setCurrentMonth(currentMonth + 1)
            }
          />
        </Styles.ButtonGroup>
      </Styles.TopBar>
      <Styles.MonthContainer>
        {currentCalendar.map(({ days }, weekIndex) => (
          <Styles.Week key={weekIndex}>
            {days.map((day, key) => (
              <DayGridItem
                key={key}
                {...{
                  day,
                  disabled:
                    (weekIndex === 0 && day >= 25) ||
                    (weekIndex === currentCalendar.length - 1 && day < 22),
                }}
              />
            ))}
          </Styles.Week>
        ))}
      </Styles.MonthContainer>
    </Styles.Container>
  );
};

export default MonthGrid;
