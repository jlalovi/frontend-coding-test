import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  html {
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
  }

  #root {
    height: 100%;
  }

  #main {
    height: 100%;
  }

`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr  7fr;
  height: 100%;
`;

export default {
  Container,
  Content,
}
