import styled from "styled-components";

export const Container = styled.div`
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
    width: 258px;
    height: 88px;
    margin-bottom: 48px;
    margin-top: 24px;
  }
`