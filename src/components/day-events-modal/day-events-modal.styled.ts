import styled from "styled-components";

export const Container = styled.div`
  display: block;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  margin: 32px;
`;
export const AddEventsContainer = styled.div`
  margin-left: 32px;
  display: flex;
  flex-grow: 1;
  overflow: hidden;
`;
export const AllEventsList = styled.ul`
  border-right: 4px solid black;
  max-width: 50%;
  min-width: 50%;
  overflow: auto;
`;
export const DayEventsList = styled.ul`
  margin-left: 12px;
  overflow: auto;
`;
