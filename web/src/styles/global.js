import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background:  ${({ theme }) => theme.COLORS.DARK_400};
    /* background: #fff; */

    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-family: 'Roboto';
  }

  span, button, a, h2 {
    font-family: 'Poppins';
  } 

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  h1 {
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 37.2431px;
  }
  
`