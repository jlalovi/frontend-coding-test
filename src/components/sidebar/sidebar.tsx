import React from "react";
import { Category } from "../../utils/types";
import * as Styles from "./sidebar.styled";
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
    <Styles.Container>
      <Styles.FlexContainer>
        <Styles.InputText placeholder="Enter a new category" />
        <Styles.Button>Create</Styles.Button>
      </Styles.FlexContainer>
      <Styles.ListContainer>
        {initialCategories.map(({ name, color, visible }, index) => (
          <Styles.CategoryItem key={index} {...{ color, visible }}>
            <div className="color" />
            <li className="item-name">
              {name}
              <Delete height={23} />
            </li>
          </Styles.CategoryItem>
        ))}
      </Styles.ListContainer>
    </Styles.Container>
  );
};

export default SideBar;
