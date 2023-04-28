import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}


  body {
    padding: 0;
    background-color: #EBD8FF;
    font-family: Montserrat, sans-serif;

  }

  ul{
    padding: 0;
    list-style: none;
  }


`;
