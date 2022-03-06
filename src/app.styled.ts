import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 6.5fr;
  height: 100%;
  overflow: hidden;
  /* custom scrollbar */
  *::-webkit-scrollbar {
    width: 10px;
    background-color: ${({ theme }) => theme.gray_100};
    border-radius: 20px;
  }
  *::-webkit-scrollbar-track {
    background-color: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.gray_300};
    border-radius: 20px;
    border: 3px solid transparent;
    background-clip: content-box;
  }
  *::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.gray_400};
  }
`;

export default {
  Container,
  Content,
};
