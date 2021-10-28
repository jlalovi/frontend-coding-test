import styled from 'styled-components';

interface IProps {
  disabled: boolean;
}

const Container = styled.div<IProps>`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 200px;
  border: 1px solid ${({ theme }) => theme.gray_300};
  background-color: ${({ theme, disabled }) => disabled && theme.gray_100};
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  
  .day {
    padding: 0 1rem;
  }

  .bubble{
    position: absolute;
    z-index: -1;
    top: 12px;
    left: 9px;
    height: 30px;
    width: 30px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.gray_100};
  }
`;

export default {
  Container,

}