import styled from "styled-components";

export const Container = styled.div`

  header {
    width: 100%;
    height: 114px;
    padding: 56px 28px 24px;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 22px;
    
    display: flex;
    align-items: center;
    gap: 16px;
  }

  button {
    padding-bottom: 10px;
    padding-top: 36px;
  }

  header button {
    border: none;
    background: none;
    padding: 0;
  }

  
  input {
    font-family: 'Roboto';
    font-size: 16px;
    width: 100%;
  }
  
  .props {
    height: 138px;
    margin-top: 36px;
    margin-left: 28px;
    margin-right: 28px;
    margin-bottom: 560px;
  }

  .adminOnly {
    display: flex;
  }

  .disabled {
    display: none;
  }

  #button {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
  }
`