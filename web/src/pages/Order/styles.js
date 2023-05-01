import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer'
  ;
  margin: 0 auto;
  height: 100vh;

  .disabled {
    display: none;
  }

  @media(min-width: 1366px) {
    .disabled {
      display: flex;
    }
  }
`

export const Content = styled.div`
  grid-area: content;

  margin: 56px 35px;

  a {
    margin-bottom: 32px;
  }

  h1 {
    font-family: 'Poppins';
    font-size: 32px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .resume {
    width: 100%;
  }

  #orderedDish {
    display: grid;
    grid-template-areas: 
    'img title'
    'img remove'
    ;
    padding: 16px 0;
    width: 231px;

    > img {
      grid-area: img;
      width: 72px;
      height: 72px;
    }

    > span {
      grid-area: title;
      margin-left: 12px;
      font-family: 'Poppins'; 
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 20px;
      line-height: 32px;
    }

    > button {
      grid-area: remove;
      margin-left: 12px;
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.TOMATO_400};
      text-align: left;
    }
  }

  p {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  a:last-child {
    display: flex;
    flex-direction: column;
    width: 216px;
    margin: 31px 37px 0 175px;
  }

  .disabled {
    display: flex;
  }

  @media(min-width: 1366px) {
    main {
      display: grid; 
      grid-template-areas: 
        'resume payment'
      ;
      justify-content: center;
    }

    .backbutton {
      margin-left: 277px;
      margin-bottom: 10px;
    }

    .disabled {
      display: none;
    }

    .resume {
      grid-area: resume;
      width: 444px;
    }

    .payment {
      grid-area: payment;
      width: 530px;
      
      > div {
        margin-top: 32px;
        height: 445px;
        border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_700};
        border-radius: 5px;
        
        display: flex;
        align-items: center;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 36px;
        line-height: 120%;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }
    }
  }
`