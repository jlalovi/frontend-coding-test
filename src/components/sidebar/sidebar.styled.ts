import styled from "styled-components";

interface IEventItem {
  color: string;
}

export const Container = styled.div`
  border-top: 1px solid ${({ theme }) => theme.gray_300};
  font-size: 15px;
  padding: 1.5rem;
`;

export const InputText = styled.input`
  height: 30px;
  width: 100%;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.dark_blue_700};
  transition: 0.3s;
  cursor: pointer;
  color: white;
`;

export const EventItem = styled.div<IEventItem>`
  display: inline-flex;
  margin-bottom: 10px;
  align-items: center;

  .color {
    background-color: ${({ color }) => color};
    border: 1px solid ${({ theme }) => theme.gray_800};
    border-radius: 100%;
    margin-right: 0.5rem;
    width: 15px;
    height: 15px;
  }
  .item-name {
    list-style: none;
    display: inline-flex;
    cursor: text;
  }

  svg:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const ListContainer = styled.ul`
  padding: 0.5rem 0rem;
`;

export const AddItemContainer = styled.div`
  display: inline-flex;
  width: 100%;
`;
