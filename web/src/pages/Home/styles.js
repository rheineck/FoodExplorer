import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  display: grid;
  grid-template-areas:
    'header'
    'content';

`

export const Content = styled.div`

  grid-area: content;

  h1 {
    font-weight: 500;
    font-size: 18px;
  }

  #cards {
    display: flex;
    width: 100vw;
    overflow-x: auto;
    gap: 16px;
    margin: 24px;
  }

  #dishesType {
    margin: 24px;
  }

  .info {
    display: grid;

    grid-template-areas:
    'img text';

    width: 376px;
    height: 120px;

    margin: 50px;

    grid-template-columns: 1fr 1fr;
    border-radius: 3px;

    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    
    .infoImg {
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
      }
      
      span {
        font-size: 12px;
        font-weight: 400;
      }
    }
      
  }

  @media(min-width: 1366px) {
    .info {
      width: 1120px;
      height: 260px;

      margin: 164px 124px 62px;

      .infoImg {
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
  }
`