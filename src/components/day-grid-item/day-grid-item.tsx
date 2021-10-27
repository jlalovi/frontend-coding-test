import React from 'react';
import Styles from './day-grid-item.styled';


interface IProps {
  day: number;
}

const DayGridItem: React.FC<IProps> = ({ day }) => {
  return (
    <Styles.Container>

      <div className='bubble' />
      <p className='day'>{day}</p>
    </Styles.Container>
  );
}

export default DayGridItem;
