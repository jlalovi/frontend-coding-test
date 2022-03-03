import React from "react";
import { Category } from "../../utils/types";
import {
  Container,
  InputText,
  FlexContainer,
  ListContainer,
  Button,
  CategoryItem,
} from "./sidebar.styled";
import { Delete } from "@styled-icons/fluentui-system-filled";

const SideBar: React.FC = () => {
  const initialCategories: Category[] = [
    {
      name: "Holidays",
      color: "#FF3D3D",
      visible: false,
    },
    {
      name: "Work",
      color: "#3DFFB8",
      visible: false,
    },
  ]; // delete me

  return (
    <Container>
      <FlexContainer>
        <InputText placeholder="Enter a new category" />
        <Button>Create</Button>
      </FlexContainer>
      <ListContainer>
        {initialCategories.map(({ name, color, visible }) => (
          <CategoryItem {...{ color, visible }}>
            <div className="color" />
            <li className="item-name">
              {name}
              <Delete height={23} />
            </li>
          </CategoryItem>
        ))}
      </ListContainer>
    </Container>
  );
};

export default SideBar;
