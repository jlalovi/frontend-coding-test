import styled from "styled-components";

export const Container = styled.div`
  display: block;
  padding: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  margin: 0;
`;
export const AddEventsContainer = styled.div`
  margin: 12px;
  display: flex;
  flex-grow: 1;
`;
export const AllEventsList = styled.ul`
  border-right: 4px solid black;
  flex-grow: 1;
`;
export const DayEventsList = styled.ul`
  flex-grow: 1;
  margin-left: 12px;
`;
