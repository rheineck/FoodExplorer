import styled from "styled-components";

export const Container = styled.div`
  height: 12rem;
  width: 100%;
  padding: 5.6rem 2.8rem 2.4rem;
  background: ${({ theme }) => theme.COLORS.DARK_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: none;
  }

  button:hover {
    background: none;
    filter: none;
  }

  h1 {
    font-size: 21.1629px;
  }

  span {
    display: none;
  }

  .popup {
    position: absolute;
    right: 2rem;
    top: 5.2rem;    
    
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
  }

  .desktopOnly {
    display: none;
  }

  @media(min-width: 1200px) {

    padding: 2.4rem 12.3rem;

    .mobileOnly {
      display: none;
    }

    .desktopOnly {
      display: block;
    }

    input {
      width: 58.1rem;
      height: 4.8rem;
    }

    button {
      display: flex;
      align-items: center;
      background: ${({ theme }) => theme.COLORS.TOMATO_100};
      width: 22 rem;
      height: 5.6rem;
      padding: 1.6rem 4.65rem;
      gap: 8px;

      border-radius: 5px;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }

    button:hover {
      background: ${({ theme }) => theme.COLORS.TOMATO_400};
    }

    button:last-child {
      background: none;
      height: 3.2rem;
      width: 3.2rem;
      margin-left: 3.2rem;
    }

    img {
      height: 28px;
      width: 28px;
    }

  }
`