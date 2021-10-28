import React, { useState } from 'react';
import { calendar } from '../../utils/json-calendar';
import DayGridItem from '../day-grid-item/day-grid-item';
import Styles from './month-grid.styled';
import { ArrowLeftCircle } from '@styled-icons/bootstrap/ArrowLeftCircle';
import { ArrowRightCircle } from '@styled-icons/bootstrap/ArrowRightCircle';

const MonthGrid: React.FC = () => {
  const [currenthMonth, setCurrentMonth] = useState(calendar.options.monthIndex);
  const [currentDays, setCurrentDays] = useState(calendar.weeks);
  const currentCalendar = currentDays.map(w => w.map(d => d.day));
  return (
    <Styles.Container>
      <Styles.TopBar>
        <div className='title'>
          {calendar.getMonthName(currenthMonth)}
        </div>
        <div/>
        <div className='button-group'>
          <ArrowLeftCircle 
            size={24} 
            onClick={() => {
              if (currenthMonth > 0) {
                setCurrentMonth(currenthMonth - 1);
                calendar.changeMonth(calendar.options.year, currenthMonth - 1)
              }
            }} 
          />
          <ArrowRightCircle 
            size={24}
            onClick={() => {
              if (currenthMonth < 11) {
                setCurrentMonth(currenthMonth + 1);
                calendar.changeMonth(calendar.options.year, currenthMonth + 1)
              }
            }}
          />
        </div>
      </Styles.TopBar>
      {
        currentCalendar.map((week, weekIndex) => (
          <Styles.Week>
            {week.map((day, key) => (
              <DayGridItem 
                {...{ 
                  key, 
                  day, 
                  disabled: weekIndex === 0 && day > 25 || 
                    weekIndex === currentCalendar.length - 1 && day < 26 
                }}
              />
            ))}
          </Styles.Week>
        ))
      }
    </Styles.Container>
  );
}

export default MonthGrid;