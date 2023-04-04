import styled from "styled-components";

export const Container = styled.div`
  height: 120px;
  width: 100%;
  padding: 56px 28px 24px;
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

  .desktopOnly {
    display: none;
  }

  .popup {
    position: absolute;
    right: 20px;
    top: 52px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    
    border-radius: 50%;
    height: 20px;
    width: 20px;

    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 500;
  }

  @media(min-width: 1200px) {
    .mobileOnly {
      display: none;
    }

    .desktopOnly {
      display: block;
    }

    button {
      background: ${({ theme }) => theme.COLORS.TOMATO_100};
    }

    button:hover {
      background: ${({ theme }) => theme.COLORS.TOMATO_400};
    }

    button:last-child {
      background: none;
    }

    button:last-child svg {
      height: 32px;
      width: 32px;
    }
  }
`