import React, { useState } from "react";
import * as Styles from "./textfield.styled";

interface IProps {
  eventHandler: (value: string) => void;
  placeholder: string;
  buttonTitle: string;
}
const TextField: React.FC<IProps> = ({
  eventHandler,
  placeholder,
  buttonTitle,
}) => {
  const [value, setValue] = useState("");

  const submitHandler = () => {
    const trimmedValue = value.trim();
    if (trimmedValue !== "") {
      eventHandler(trimmedValue);
      setValue("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      submitHandler();
    }
  };

  return (
    <Styles.TextFieldContainer>
      <Styles.InputText
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
      />
      <Styles.Button onClick={submitHandler}>{buttonTitle}</Styles.Button>
    </Styles.TextFieldContainer>
  );
};

export default TextField;
