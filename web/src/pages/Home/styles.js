import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
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

  #dishesCategory {
    margin: 24px;
  }

  @media(min-width: 1366px) {
    #cards {
      width: auto;
      gap: 27px;
      border: 1px solid red;
    }
    
    #grad {
      width: 277px;
      background: linear-gradient(to left, rgba(0, 10, 15, 0.272541) 0%, white 100%);
      z-index: 1;
      position: relative;

    }

    #dishesCategory {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 32px;
    }
  }
`