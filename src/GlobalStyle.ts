import { createGlobalStyle } from 'styled-components';
import 'modern-normalize/modern-normalize.css';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    padding: 0;
    font-family: ${theme.fonts.primary};
    line-height: 1.2;
    background-color: ${theme.colors.secondary['100']};
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

  p{margin: 0;}

  svg {
    display: block;
    fill: currentColor;
  }
`;
