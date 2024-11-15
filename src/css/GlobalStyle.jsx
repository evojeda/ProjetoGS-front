import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif !important;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #000;
  }
`;

export default GlobalStyle;
