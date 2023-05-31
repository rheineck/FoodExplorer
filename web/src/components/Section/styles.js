import styled from "styled-components";

export const Container = styled.section`

  margin-left: 24px;
  width: 384px;
  height: 100%;
  margin-top: 48px;
  
  h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 23px;
  }
  
  button {
    border: none;
  }
  
  svg {
    width: 40px;
    height: 40px;
  }
  
  @media(min-width: 1270px) {
    width: 1120px;
    margin: 0;
    h2 {
      font-size: 32px;
    }
  }

`

export const Slider = styled.div`
  
  width: 384px;
  overflow-x: auto;
  display: flex;
  
  > div {
    display: flex;
    gap: 16px;
    height: 341px;
  }
  
  .desktopOnly {
    display: none;
  }
  
  @media(min-width: 1270px) {
    width: 1120px;
    height: 462px;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
        ::-webkit-scrollbar {
          display: none;
        }
    margin-bottom: 48px;

    .mobileOnly {
      display: none;
    }

    .desktopOnly {
      display: block;
    }

    .buttonLeft, .buttonRight {
      position: absolute;
      width: 60px;
      height: 462px;
      z-index: 99;  
    }

    .buttonLeft {
      position: absolute;
      left: 90px;
      background: linear-gradient(270deg, rgba(0, 10, 15, 0.272541) 0%, ${({ theme }) => theme.COLORS.DARK_400} 100%);
    }
    
    .buttonRight {
      position: absolute;
      right: 140px;
      background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, ${({ theme }) => theme.COLORS.DARK_400} 100%);
    }
  }

  @media(width: 1920px) {

    width: 1200px;

    .buttonLeft {
      left: 320px;
    }

    .buttonRight {
      right: 320px;
    }
  }

`