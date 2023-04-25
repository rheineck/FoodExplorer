import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-areas:
  'img text';

  width: 376px;
  height: 120px;

  margin: 44px 16px 62px 36px;

  grid-template-columns: 1fr 1fr;
  border-radius: 3px;

  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  
  img {
    grid-area: img;
    height: 149px;
    width: 191px;
    margin-top: -30px;
    margin-left: -30px;
  }
  
  .text {
    grid-area: text;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-left: -30px;
    margin-top: 36px;
    
    h1 {
      font-family: 'Poppins';
      font-weight: 600;
      font-size: 18px;
    }
    
    span {
      font-size: 12px;
      font-weight: 400;
    }
  }

  @media(min-width: 1366px) {
    width: 1120px;
    height: 260px;
    margin-top: 164px;
    margin-bottom: 62px;
    /* margin: 164px 124px 62px; */

    img {
      height: 412px;
      width: 656px;
      margin-top: -152px;
      margin-left: -74px;
    }

    .text {
      margin-top: 88px;
      margin-right: 100px;
      h1 {
        font-size: 40px;
        font-weight: 500;
      }

      span {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
      }
    }
  }

  @media(width: 1920px) {
    width: 1200px;
  }
`