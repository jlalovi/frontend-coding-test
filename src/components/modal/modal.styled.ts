import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 999;
  padding: 40px 20px 20px;
  .modal-content {
    width: 70%;
    height: 70%;
    background-color: ${({ theme }) => theme.gray_100};
    border-radius: 4px;
    display: flex;
    position: relative;
    .close-button {
      position: absolute;
      right: 6px;
      top: 6px;
      opacity: 0.5;
      :hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  }
`;
