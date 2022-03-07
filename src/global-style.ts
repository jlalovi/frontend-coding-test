import { createGlobalStyle } from "styled-components";
import { ITheme } from "./assets/themes/main-theme";

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
  }

  #root {
    height: 100%;
  }

  #main {
    height: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  ul {
    margin: 0;
    padding: 0;
  }

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

export default GlobalStyle;
