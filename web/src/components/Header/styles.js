import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 120px;
  padding: 56px 28px 24px;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  button {
    background: none;
  }

  button:hover {
    background: none;
  }

  .popup {
    position: relative;
    left: 50px;
    bottom: 10px;
    
    padding: 0 5.5px;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    
    border-radius: 50%;
    height: 20px;
    width: 20px;
    
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 500;
  }

  .desktopOnly {
    display: none;
  }

  @media(min-width: 1366px) { 

    margin-left: 122px;
    gap: 32px;

    input {
      /* width: 490px; */
    }

    .mobileOnly {
      display: none;
    }

    .desktopOnly {
      display: flex;
    }

    a {
      font-size: 16px;
    }
    
    button:hover {
      background: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
    
    button:last-child {
      border: none;
    }

    .receiptButton {
      background: ${({ theme }) => theme.COLORS.TOMATO_100};
      width: 216px;
    }
  }

    @media(width: 1920px) {
    padding: 0 27.7rem;

    input {
      /* width: 581px; */
    }
  }
`