import React from "react";
import * as Styles from "./sidebar.styled";
import { useTheme } from "../../utils/hooks/useTheme";
import { Event } from "../../utils/types";
import { Delete } from "@styled-icons/fluentui-system-filled";

const SideBar: React.FC = () => {
  const { toggleTheme } = useTheme();
  return (
    <Styles.Container>
      <button onClick={toggleTheme}>Switch theme</button>
      <Styles.AddItemContainer>
        <Styles.InputText placeholder="Enter a new event" />
        <Styles.Button>Create</Styles.Button>
      </Styles.AddItemContainer>
      <Styles.ListContainer>
        {/* {TODO List here your events} */}
        {/* {myEvents.map({ name, color }, index) => (
          <Styles.EventItem key={index} color={color}>
            <li className="item-name">
              <div className="color" />
              {name}
            </li>
            <Delete height={23} />
          </Styles.EventItem>
        )} */}
      </Styles.ListContainer>
    </Styles.Container>
  );
};

export default SideBar;
