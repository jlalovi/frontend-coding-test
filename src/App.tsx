import React from 'react';
import { ThemeProvider } from 'styled-components';
import Styles from './app.styled';
import MonthGrid from './components/month-grid/month-grid';
import SideBar from './components/sidebar/sidebar';
import { useTheme } from './utils/hooks/useTheme';

//API Festivos de la CM:https://datos.comunidad.madrid/catalogo/dataset/2f422c9b-47df-407f-902d-4a2f44dd435e/resource/453162e0-bd61-4f52-8699-7ed5f33168f6/download/festivos_regionales.json

const App: React.FC = () => {
  const theme = useTheme();
  return (
    <Styles.Container>
      <ThemeProvider {...theme}>
        <Styles.Content>
          <SideBar />
            <MonthGrid />
        </Styles.Content>
      </ThemeProvider>
    </Styles.Container>
  );
}

export default App;
