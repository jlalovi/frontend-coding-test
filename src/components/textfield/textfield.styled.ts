import styled from "styled-components";

export const InputText = styled.input`
  height: 30px;
  width: 100%;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.dark_blue_700};
  transition: 0.3s;
  cursor: pointer;
  color: white;
`;

export const TextFieldContainer = styled.div`
  display: inline-flex;
  width: 100%;
`;
