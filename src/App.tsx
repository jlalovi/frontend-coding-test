import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Styles from './app.styled';
import MonthGrid from './components/month-grid/month-grid';
import SideBar from './components/sidebar/sidebar';
import Topbar from './components/topbar/topbar';
import YearGrid from './components/year-grid/year-grid';
import { dateOptions } from './utils/constants/calendar';
import { useTheme } from './utils/hooks/useTheme';

const App: React.FC = () => {
  const [optionSelected, setOptionSelected] = useState(dateOptions[0]);
  const theme = useTheme();
  return (
    <Styles.Container>
      <ThemeProvider {...theme}>
        <Topbar />
        <Styles.Content>
          <SideBar />
          {optionSelected === dateOptions[0] ? (
            <MonthGrid />
          ) : (
            <YearGrid />
          )}
        </Styles.Content>
      </ThemeProvider>
    </Styles.Container>
  );
}

export default App;
