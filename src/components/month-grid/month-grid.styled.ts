import styled from "styled-components";

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
  color: ${({ theme }) => theme.cyan_600};
  padding: 2rem 1rem;
  justify-items: center;
  align-content: center;

  svg {
    cursor: pointer;
  }
`;

export const Title = styled.div`
  padding: 2rem;
  font-size: 40px;
  justify-self: center;
  align-self: center;
`;
