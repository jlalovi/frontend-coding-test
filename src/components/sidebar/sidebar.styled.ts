import styled from "styled-components";

interface IEventItem {
  color: string;
}

export const Container = styled.div`
  border-top: 1px solid ${({ theme }) => theme.gray_300};
  font-size: 15px;
  padding: 1.5rem;
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

export const ListContainer = styled.ul`
  padding: 0.5rem 0rem;
`;
