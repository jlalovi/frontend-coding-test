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
  .button-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1em;
    color: ${({ theme }) => theme.cyan_600};
    width: fit-content;
    float: right;
    padding: 1rem 1.2rem;
  }
`;

export default {
  Container,
  Week,
  TopBar,
}