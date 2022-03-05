import styled from "styled-components";
import { ArrowLeftCircle } from "@styled-icons/bootstrap/ArrowLeftCircle";
import { ArrowRightCircle } from "@styled-icons/bootstrap/ArrowRightCircle";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 140px 1fr;
  border-top: 1px solid ${({ theme }) => theme.gray_300};
  border-left: 1px solid ${({ theme }) => theme.gray_300};
`;

export const Week = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const TopBar = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 200px 200px;
  justify-content: space-between;
`;

export const MonthContainer = styled.div`
  display: grid;
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1em;
  padding: 2rem 1rem;
  justify-items: center;
  align-content: center;
`;
interface IProps {
  disabled: boolean;
}
export const ArrowLeftCircleStyled = styled(ArrowLeftCircle)<IProps>`
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  color: ${({ disabled, theme }) =>
    disabled ? theme.gray_300 : theme.cyan_600};
`;
export const ArrowRightCircleStyled = styled(ArrowRightCircle)<IProps>`
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  color: ${({ disabled, theme }) =>
    disabled ? theme.gray_300 : theme.cyan_600};
`;

export const Title = styled.div`
  padding: 2rem;
  font-size: 40px;
  justify-self: center;
  align-self: center;
`;
