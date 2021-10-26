import React, { useState } from 'react';
import Styles from './app.styled';
import MonthGrid from './components/month-grid/month-grid';
import SideBar from './components/sidebar/sidebar';
import Topbar from './components/topbar/topbar';
import YearGrid from './components/year-grid/year-grid';
import { dateOptions } from './utils/constants/calendar';

const App: React.FC = () => {
  const [optionSelected, setOptionSelected] = useState(dateOptions[0]);

  return (
    <Styles.Container>
      <Topbar />
      <Styles.Content>
        <SideBar />
        {optionSelected === dateOptions[0] ? (
          <MonthGrid />
        ) : (
          <YearGrid />
        )}
      </Styles.Content>
    </Styles.Container>
  );
}

export default App;
