import React, { useState } from 'react';
import { MONTH_NAMES, showCalendar } from '../../utils/calendar';
import DayGridItem from '../day-grid-item/day-grid-item';
import Styles from './month-grid.styled';
import { ArrowLeftCircle } from '@styled-icons/bootstrap/ArrowLeftCircle';
import { ArrowRightCircle } from '@styled-icons/bootstrap/ArrowRightCircle';

const MonthGrid: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const currentYear = new Date().getFullYear();
  const currentCalendar = showCalendar(currentMonth, currentYear);

  return (
    <Styles.Container>
      <Styles.TopBar>
        <div className='title'>
          {MONTH_NAMES[currentMonth]}
        </div>
        <div/>
        <div className='button-group'>
          <ArrowLeftCircle 
            size={40} 
            onClick={() => currentMonth > 0 && setCurrentMonth(currentMonth - 1)} 
          />
          <ArrowRightCircle 
            size={40}
            onClick={() => currentMonth < 11 && setCurrentMonth(currentMonth + 1)}
          />
        </div>
      </Styles.TopBar>
      {
        currentCalendar.map(({ days }, weekIndex) => (
          <Styles.Week>
            {days.map((day, key) => (
              <DayGridItem 
                {...{ 
                  key, 
                  day, 
                  disabled: weekIndex === 0 && day > 25 || 
                    weekIndex === currentCalendar.length - 1 && day < 22 
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