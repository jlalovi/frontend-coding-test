import styled from 'styled-components';


const Container = styled.div`
  border-top: 1px solid  ${({theme}) => theme.gray_300};
  font-size: 14px;
  padding: 1.5rem;
`;

const InputText = styled.input`
  height: 30px;
`;

const Button = styled.button`
  background-color: ${({theme}) => theme.dark_blue_700};
  transition: 0.3s;
  color: white;
`;

const ListContainer = styled.ul`
  padding: 1rem;
`;

const FlexContainer = styled.div`
  display: flex;
`;

export {
  Container,
  InputText,
  Button,
  ListContainer,
  FlexContainer,
}