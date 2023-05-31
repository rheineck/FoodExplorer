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

  h1, textarea, input {
    font-family: 'Roboto';
  }

  span, button, a, h2 {
    font-family: 'Poppins';
  } 

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  button:hover {
    filter: brightness(0.9);
  }

  h1 {
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 38px;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    height: 28px;
    width: 28px;
  }

  header {
    animation-name: topdown;
    animation-duration: 2s;
  }

  main {
    animation-name: downtop;
    animation-duration: 2s;
  }

  @keyframes topdown {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes downtop {
    0% {
      opacity: 0;
      transform: translateY(0px);
    }

    100% {
      opacity: 1;
      transform: translateY(-2px);
    }
  }

`