import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
  'header'
  'content'
  'footer'
  ;

  height: 100vh;

  .disabled {
    display: none;
  }
`

export const Content = styled.div`
  grid-area: content;
  
  margin: 0 auto;
  width: 70%;

  display: flex;
  flex-direction: column;
  
  h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 32px;
    font-weight: 500;
  }

  .favorites {
    margin-top: 28px;
  }

  #favoriteDish {
    display: grid;
    grid-template-areas: 
    'img title'
    'img remove'
    ;
    padding: 16px 0;

    > img {
      grid-area: img;
      width: 72px;
      height: 72px;
    }

    > a {
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

  @media(min-width: 1366px) {
    width: 60%;
    height: 80vh;
    margin-top: 34px;

    .disabled {
      display: flex;
    }

    .favorites {
      display: grid;
      grid-template-areas: 
        'card card card card'
        'card card card card'
      ;
    }

    .backbutton {
      margin-bottom: 32px;
    }

    #favoriteDish {
      width: 231px;
      margin-right: 48px;
      margin-bottom: 48px;
    }
  }
`