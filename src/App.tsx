import React from 'react';
import Styles from './app.styled';
import SideBar from './components/sidebar/sidebar';
import Topbar from './components/topbar/topbar';

const App: React.FC = () => {
  return (
    <Styles.Container>
      <Topbar />
      <SideBar />
    </Styles.Container>
  );
}

export default App;
