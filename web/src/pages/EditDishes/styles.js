import styled from "styled-components";

export const Container = styled.div`

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
  }

  label {
    font-size: 16px;
  }

  .buttons {
    display: flex;
  }

  button:first-child {
    background: ${({ theme }) => theme.COLORS.DARK_800};

    &:hover {
      background: ${({ theme }) => theme.COLORS.DARK_1000};
    }
  }
`