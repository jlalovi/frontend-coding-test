import React from "react";
import * as Styles from "./sidebar.styled";
import { Event } from "../../utils/types";
import { Delete } from "@styled-icons/fluentui-system-filled";

const SideBar: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.AddItemContainer>
        <Styles.InputText placeholder="Enter a new category" />
        <Styles.Button>Create</Styles.Button>
      </Styles.AddItemContainer>
      <Styles.ListContainer>
        {/* {TODO List here yout events} */}

        {/* {myEvents.map(({ name, color }, index) => (
          <Styles.EventItem key={index} color={color}>
            <div className="color" />
            <li className="item-name">
              {name}
              <Delete height={23} />
            </li>
          </Styles.EventItem>
        ))}*/}
      </Styles.ListContainer>
    </Styles.Container>
  );
};

export default SideBar;
