import styled from "styled-components";

export const Container = styled.div`
  grid-area: content;

  main {
    margin: 16px 58px 34px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    margin-top: 16px;
  }

  main span {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 16px;
    text-align: center;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .backbutton {
    font-size: 24px;
    margin-top: 37px;
    margin-left: 56px;
  }

  .dishImg {
    height: 264px;
    width: 264px;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .includeButton {
    width: 188px;
    font-weight: 500;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

  .includeDishes {
    font-family: 'Roboto';
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 24px;
    gap: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100}
  }

  .ingredients {
    display: grid;
    grid-template-areas: 
      'tags tags tags'
      'tags tags tags'
    ;
    margin-bottom: 48px;
    margin-top: 24px;
    gap: 12px;
  }

  .disabled {
    display: none;
  }

  .editDishes {
    height: 48px;
    width: 316px;
  }

  @media(min-width: 1270px) {

    main {
      margin: 42px 122px 65px;
      display: grid;
      grid-template-areas: 
      'img content';
    }

    .backbutton {
      margin-left: 122px;
    }

    h1 {
      font-size: 40px;
      font-weight: 500;
      font-family: 'Poppins';
    }

    .title span {
      font-size: 24px;
      text-align: justify;
    }

    .dishImg {
      grid-area: img;
      height: 390px;
      width: 390px;
      margin-right: 48px;
    }

    .title {
      grid-area: content;
      align-items: normal;
    }

    .ingredients {
      display: flex;
      gap: 12px;
    }

    .includeButton {
      margin-left: 33px;
       
      > span {
        font-size: 14px;
        line-height: 24px;
      }
    }

    .editDishes {
      width: 131px;

      > span {
        font-size: 14px;
        line-height: 24px;
      }
    }
  }

  @media(width: 1920px) {
    .backbutton, main {
      margin-left: 27.7rem;
      margin-right: 27.7rem;
      margin-bottom: 142px;
    }
  }
`