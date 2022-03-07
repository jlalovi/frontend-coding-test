import React from "react";
import { ThemeProvider } from "styled-components";
import Styles from "./app.styled";
import MonthGrid from "./components/month-grid/month-grid";
import SideBar from "./components/sidebar/sidebar";
import GlobalStyle from "./global-style";
import { useTheme } from "./utils/hooks/useTheme";

const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Styles.Container>
        <Styles.Content>
          <GlobalStyle />
          <SideBar />
          <MonthGrid />
        </Styles.Content>
      </Styles.Container>
    </ThemeProvider>
  );
};

export default App;
