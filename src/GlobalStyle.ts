import { createGlobalStyle } from 'styled-components';
import 'modern-normalize/modern-normalize.css';

export const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    padding: 0;
    font-family: Montserrat, sans-serif;
    background-color: #f3e8ff;
  }

  button {
    border: none;
    cursor: pointer;

  }

  ul{
    padding: 0;
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  svg {
    display: block;
    fill: currentColor;
  }
`;
