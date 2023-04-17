import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  main {
    margin: 11px 32px 53px;
  }

`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-family: 'Roboto';

  header {
    font-size: 32px;
    font-family: 'Poppins';
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-top: 24px;
  }
  
  label {
    font-size: 16px;
    margin-bottom: 16px;
    margin-top: 24px;
  }
  
  input {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
  }

  textarea {
    font-size: 16px;
  }

  .buttons {
    display: flex;
    gap: 32px;
    margin-top: 24px;

    button {
      width: 100%;
    }
  }

  button:first-child {
    background: ${({ theme }) => theme.COLORS.DARK_800};
    
    &:hover {
      background: ${({ theme }) => theme.COLORS.DARK_1000};
    }
  }
  
  .ingredients {
    display: flex;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    gap: 16px;
    padding: 8px;
    border-radius: 8px;
    margin-top: 16px;
    font-size: 16px;
  }
`