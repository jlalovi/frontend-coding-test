import styled from "styled-components";

interface IEventItem {
  color: string;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  overflow-y: hidden;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.gray_300};
  font-size: 15px;
  > .switch-theme {
    margin: 1rem;
  }
  > .add-event-container {
    margin: 1rem;
    margin-top: 0;
  }
`;

export const ListContainer = styled.ul`
  padding: 0 0.5rem 0 1rem;
  margin: 0;
  flex-grow: 1;
  overflow-y: auto;
`;

export const EventItem = styled.li<IEventItem>`
  display: flex;
  margin-bottom: 10px;
  align-items: center;

  :hover .remove-event-icon {
    visibility: visible;
  }
  .remove-event-icon {
    visibility: hidden;
  }
  .remove-event-icon:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  .color-name-wrapper {
    flex-grow: 1;
    list-style: none;
    display: flex;
    align-items: center;
    .color {
      background-color: ${({ color }) => color};
      border: 1px solid ${({ theme }) => theme.gray_800};
      border-radius: 100%;
      margin-right: 0.5rem;
      width: 15px;
      height: 15px;
    }
    .name-wrapper {
      flex-grow: 1;
    }
  }
`;
