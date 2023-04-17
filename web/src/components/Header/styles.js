import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;  

  height: 120px;
  max-width: auto;
  
  padding: 56px 28px 24px;
  gap: 32px;
  background: ${({ theme }) => theme.COLORS.DARK_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  .disabled {
    display: none;
  }

  button {
    background: none;
    width: fit-content;
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
    right: 45px;
    top: 56px;
    
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
  
  @media(min-width: 1366px) { 
    
    padding-left: 122px;
    padding-right: 122px;
    
    .mobileOnly {
      display: none;
    }
    
    .desktopOnly {
      display: flex;
    }
    
    button {
      background: ${({ theme }) => theme.COLORS.TOMATO_100};
      width: 216px;
    }
    
    button:hover {
      background: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
    
    button:last-child {
      background: none;
      width: fit-content;
    }
    
    button:last-child svg {
      height: 32px;
      width: 32px;
    }
    input {
      width: 581px;
    }
  }
  
  @media(width: 1920px) {
    padding: 0 27.7rem;
  }

`