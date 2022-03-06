import React from "react";
import { Delete } from "@styled-icons/fluentui-system-filled";
import * as Styles from "./sidebar.styled";
import TextField from "../textfield/textfield";
import { useTheme } from "../../utils/hooks/useTheme";
import { useEvents } from "../../utils/hooks/useEvents";

const SideBar: React.FC = () => {
  const { toggleTheme } = useTheme();
  const { addEvent, removeEventById, events: myEvents } = useEvents();

  const addEventHandler = (newEventName: string) => {
    addEvent(newEventName);
  };

  return (
    <Styles.Container>
      <button onClick={toggleTheme}>Switch theme</button>
      <TextField
        eventHandler={addEventHandler}
        placeholder="Enter a new event"
        buttonTitle="Create"
      />
      <Styles.ListContainer>
        {myEvents.map(({ name, color, id }) => (
          <Styles.EventItem key={id} color={color}>
            <div className="color-name-wrapper">
              <div className="color" />
              <div className="name-wrapper">{name}</div>
            </div>
            <Delete
              className="remove-event-icon"
              onClick={() => removeEventById(id)}
              height={23}
            />
          </Styles.EventItem>
        ))}
      </Styles.ListContainer>
    </Styles.Container>
  );
};

export default SideBar;
