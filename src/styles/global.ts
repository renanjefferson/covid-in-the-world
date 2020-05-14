import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #282a36;
    color: #f4ede8;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    padding: 0 30px;
  }

  body, input, button {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 , strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

`;
