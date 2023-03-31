import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background:  ${({ theme }) => theme.COLORS.DARK_400};

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
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  button {
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    border: none;
  }

  button:hover {
    filter: brightness(0.9);
    background: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  h1 {
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.8rem;
  }

  @media(min-width: 1500px) {
    body {
      margin: 0 20rem 0;
    }
    
  }
  
`