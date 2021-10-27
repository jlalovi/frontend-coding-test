import React from 'react';
import Styles from './topbar.styled'

const Topbar: React.FC = () => {
  return (
    <Styles.Container>
      <button>Year</button>
      <button>Month</button>
    </Styles.Container>
  );
}

export default Topbar;
