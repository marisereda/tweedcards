import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}


  body {
    padding: 0;
    background-color: #f3e8ff;
    font-family: Montserrat, sans-serif;

  }

  button {
    border: none;
  }

  ul{
    padding: 0;
    list-style: none;
  }


`;
