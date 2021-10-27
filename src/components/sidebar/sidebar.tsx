import React from 'react';
import { Container, InputText, FlexContainer, ListContainer, Button } from './sidebar.styled'

// could recieve a list of categories;
const SideBar: React.FC = () => {
  const initialCategories: string[] = ['Holidays', 'Work']; // delete me
  return (
    <Container>
      <FlexContainer>
        <InputText placeholder="Enter a new category" />
        <Button>Create</Button>
      </FlexContainer>
      <ListContainer>
        {initialCategories.map(category => (
          <li>{category}</li>
        ))}
      </ListContainer>
    </Container>
  );
}

export default SideBar;
