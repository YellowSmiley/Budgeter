import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid ${(props) => props.theme.colors.text};
    margin-bottom: 20px;
    text-align: center;

    thead {
      background-color: ${(props) => props.theme.colors.primary};
      border-bottom: 1px solid ${(props) => props.theme.colors.text};
    }

    th {
      padding: 0.5rem;
      text-align: center;
    }

    td {
      padding: 0.5rem;
      border-bottom: 1px solid ${(props) => props.theme.colors.text};
    }
  }
  `;
