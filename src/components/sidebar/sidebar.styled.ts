import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  border-top: 1px solid  ${({theme}) => theme.gray_300};
`;

export default {
  Container,
}