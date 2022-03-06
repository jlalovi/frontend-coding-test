import styled from "styled-components";

interface IEventListItem {
  color: string;
  onClick?: () => void;
}
export const EventListItem = styled.div<IEventListItem>`
  list-style-type: none;
  display: flex;
  align-items: center;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
  :hover .text {
    text-decoration: ${({ onClick }) => (onClick ? "underline" : "inherit")};
  }
  .color {
    background-color: ${({ color }) => color};
    border: 1px solid ${({ theme }) => theme.gray_800};
    border-radius: 100%;
    margin-right: 0.5rem;
    width: 15px;
    height: 15px;
  }
  .text {
    flex-grow: 1;
    margin: 4px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
