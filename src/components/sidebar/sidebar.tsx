import React from 'react';
import { Category } from '../../utils/types';
import { Container, InputText, FlexContainer, ListContainer, Button, CategoryItem } from './sidebar.styled'

const SideBar: React.FC = () => {
  const initialCategories: Category[] = [{
    name: 'Holidays',
    color: '#FF3D3D'
  },
  {
    name: 'Work',
    color: '#3DFFB8'
  }]; // delete me

  return (
    <Container>
      <FlexContainer>
        <InputText placeholder="Enter a new category" />
        <Button>Create</Button>
      </FlexContainer>
      <ListContainer>
        {initialCategories.map(({ name, color }) => (
          <CategoryItem {...{ color }}>
            <div className="color"/>
            <li className="item-name">{name}</li>
          </CategoryItem>
        ))}
      </ListContainer>
    </Container>
  );
}

export default SideBar;
