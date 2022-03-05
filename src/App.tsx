import React from "react";
import { ThemeProvider } from "styled-components";
import Styles from "./app.styled";
import MonthGrid from "./components/month-grid/month-grid";
import SideBar from "./components/sidebar/sidebar";
import { useTheme } from "./utils/hooks/useTheme";

const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    <Styles.Container>
      <ThemeProvider theme={theme}>
        <Styles.Content>
          <SideBar />
          <MonthGrid />
        </Styles.Content>
      </ThemeProvider>
    </Styles.Container>
  );
};

export default App;
