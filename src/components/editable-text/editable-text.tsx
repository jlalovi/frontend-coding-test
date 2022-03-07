import React, { useState } from "react";
import * as Styles from "./editable-text.styled";

interface IProps {
  eventHandler: (value: string) => void;
  tooltip: string;
  initialValue: string;
}
const EditableText: React.FC<IProps> = ({
  eventHandler,
  tooltip,
  initialValue,
}) => {
  const [value, setValue] = useState(initialValue);

  const submitHandler = () => {
    const trimmedValue = value.trim();
    if (trimmedValue !== "" && trimmedValue !== initialValue) {
      eventHandler(trimmedValue);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      submitHandler();
    }
  };

  return (
    <Styles.EditableTextContainer>
      <Styles.InputText
        role="event-textfield"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleKeyPress}
        onBlur={() => setValue(initialValue)}
      />
      <Styles.CheckmarkCircleStyled
        role="rename-event-button"
        title={tooltip}
        className="rename-event-icon"
        onMouseDown={(e) => e.preventDefault()} // prevents onBlur InputText
        onClick={() => submitHandler()}
        height={23}
        disabled={value.trim() === initialValue}
      />
    </Styles.EditableTextContainer>
  );
};

export default EditableText;
