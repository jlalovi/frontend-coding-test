import styled from 'styled-components';


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-top: 1px solid ${({ theme }) => theme.gray_300};
  border-left: 1px solid ${({ theme }) => theme.gray_300};
`;
const Week = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

const TopBar = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  width: 100%;
  height: 0;
  
  .button-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1em;
    color: ${({ theme }) => theme.cyan_600};
    padding: 2rem 0;
  }
  .title {
    padding: 2rem;
    font-size: 40px;
  }
`;

export default {
  Container,
  Week,
  TopBar,
}