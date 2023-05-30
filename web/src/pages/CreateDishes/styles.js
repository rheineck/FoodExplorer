import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  main {
    margin: 11px 32px 53px;
  }

  @media(min-width: 1270px) {
    main {
      margin: 40px 122px 116px;
    }
  }

  @media(width: 1920px) {
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 277px;
      margin-right: 277px;
    }

    .backbutton {
      position: relative;
      left: -525px;
    }
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
  
  h2 {
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 16px;
    margin-top: 24px;
  }
  
  input {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
  }

  select {
    width: 100%;
    height: 48px; 
    background: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    border: none;
    border-radius: 5px;
    font-family: 'Roboto';
    font-size: 16px;
    padding: 13px 16px;
  }

  #picture-input {
    padding: 0;
    margin: 0;
    
    > label {
      height: 55px;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;

      background: none;
     
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border-radius: 5px;
      padding: 12px 32px;

      svg {
        width: 24px;
        height: 24px;

        color: ${({ theme }) => theme.COLORS.WHITE};

        margin-right: 8px;
      }

      span {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        white-space: nowrap;

        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      input {
        display: none;
      }
    }
  }

  textarea {
    font-size: 16px;
    width: 100%;
    height: 150px;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: none;
    resize: none;
    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;
    &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  .buttons {
    display: flex;
    gap: 32px;
    margin-top: 24px;

    button {
      width: 100%;
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

  @media(min-width: 1270px) {
    section {
      display: flex;
      gap: 32px;
    }

    #input {
      flex-direction: column;
    }

    .dishName {
      width: 463px;
    }

    .dishCategory {
      width: 364px;
    }

    .ingredients {
      width: 837px;
    }

    .dishPrice {
      width: 270px;
    }

    .buttons {
      padding-left: 948px;

      button {
        width: 190px;
      }
    }
  }
`