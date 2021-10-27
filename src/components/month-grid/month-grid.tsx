import React from 'react';
import { calendar } from '../../utils/showcalendar';
import DayGridItem from '../day-grid-item/day-grid-item';
import Styles from './month-grid.styled';
import { ArrowLeftCircle } from '@styled-icons/bootstrap/ArrowLeftCircle';
import { ArrowRightCircle } from '@styled-icons/bootstrap/ArrowRightCircle';

const MonthGrid: React.FC = () => {
  const month = calendar.weeks.map(w => w.map(d => d.day));
  return (
    <Styles.Container>
      <Styles.TopBar>
        <div className='title'>

        </div>
        <div/>
        <div className='button-group'>
          <ArrowLeftCircle size={24}/>
          <ArrowRightCircle size={24}/>
        </div>
      </Styles.TopBar>
      {
        month.map(w => (
          <Styles.Week>
            {w.map(d => (
              <DayGridItem day={d} />
            ))}
          </Styles.Week>
        ))
      }
    </Styles.Container>
  );
}

export default MonthGrid;