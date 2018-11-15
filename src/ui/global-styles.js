import { createGlobalStyle } from 'styled-components';
import typography from 'typography';

typography.injectStyles();

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Exo:700|Yrsa:400,700");

  body, html {
    background-color: #384052;
    color: #D8DEEA;
    margin: 0;
    padding: 0;
  }

  h1 {
    color: #ECEFF5;
  }
  h2 {
    color: #8FBCBB;
  }

  pre, code {
    background-color: #2E3441;
    color: #C6CBD6;
    padding: 10px 10px;
  }
`;

export default GlobalStyles;
