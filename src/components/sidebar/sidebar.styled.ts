import styled from 'styled-components';

interface ICategoryItem {
  color: string;
  visible: boolean;  
}

const Container = styled.div`
  border-top: 1px solid  ${({theme}) => theme.gray_300};
  font-size: 15px;
  padding: 1.5rem;
`;

const InputText = styled.input`
  height: 30px;
  min-width: 80%;
`;

const Button = styled.button`
  background-color: ${({theme}) => theme.dark_blue_700};
  transition: 0.3s;
  cursor: pointer;
  color: white;
`;

const CategoryItem = styled.div<ICategoryItem>`
  display: flex;
  margin-bottom: 10px;
  cursor: pointer;

  .color {
    background-color: ${({color, visible}) => !!visible ? color : 'white' };
    border: 1px solid ${({ color }) => color};
    border-radius: 80%;
    margin-right: .5rem;
    width: 18px;
    :hover {
      background-color: ${({color}) => color };
    }
  }
  .item-name {
    list-style: none;

    svg {
      :hover {
        color: ${({ color }) => color};
      }
    }
  }
`;

const ListContainer = styled.ul`
  padding: .5rem 0rem;
`;

const FlexContainer = styled.div`
  display: flex;
`;

export {
  Container,
  InputText,
  Button,
  CategoryItem,
  ListContainer,
  FlexContainer,
}