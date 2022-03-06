import React from "react";
import { Delete } from "@styled-icons/fluentui-system-filled";
import * as Styles from "./sidebar.styled";
import TextField from "../textfield/textfield";
import { useTheme } from "../../utils/hooks/useTheme";
import { useEvents } from "../../utils/hooks/useEvents";
import EditableText from "../editable-text/editable-text";

const SideBar: React.FC = () => {
  const { toggleTheme } = useTheme();
  const { addEvent, removeEventById, renameEvent, getEvents } = useEvents();

  const addEventHandler = (newEventName: string) => {
    addEvent(newEventName);
  };

  const renameEventHandler = (id: string, newEventName: string) => {
    renameEvent(id, newEventName);
  };

  const myEvents = getEvents();

  return (
    <Styles.Container>
      <button className="switch-theme" onClick={toggleTheme}>
        Switch theme
      </button>
      <div className="add-event-container">
        <TextField
          eventHandler={addEventHandler}
          placeholder="Enter a new event"
          buttonTitle="Create"
        />
      </div>
      <Styles.ListContainer>
        {myEvents.map(({ name, color, id }) => (
          <Styles.EventItem key={id} color={color}>
            <div className="color-name-wrapper">
              <div className="color" />
              <div className="name-wrapper">
                <EditableText
                  tooltip="Rename event"
                  eventHandler={(newEventName: string) => {
                    renameEventHandler(id, newEventName);
                  }}
                  initialValue={name}
                />
              </div>
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
