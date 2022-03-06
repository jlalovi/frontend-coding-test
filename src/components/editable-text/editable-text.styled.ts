import { CheckmarkCircle } from "@styled-icons/fluentui-system-filled";
import styled from "styled-components";

interface IIcon {
  disabled: boolean;
}

export const InputText = styled.input`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  border: 1px solid transparent;
  padding: 4px;
  margin-right: 6px;
  :hover {
    border: 1px solid ${({ theme }) => theme.gray_300};
  }
  :focus {
    border: 1px solid ${({ theme }) => theme.cyan_600};
  }
  :focus-visible {
    outline: none;
  }
`;

export const CheckmarkCircleStyled = styled(CheckmarkCircle)<IIcon>`
  visibility: ${({ disabled }) => (disabled ? "hidden !important" : "hidden")};
  opacity: 0.5;
  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const EditableTextContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  ${InputText}:focus ~ ${CheckmarkCircleStyled} {
    visibility: visible;
  }
`;
