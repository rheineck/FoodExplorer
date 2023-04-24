import styled from "styled-components";

export const Container = styled.section`

  /* margin: 24px; */
  width: 1120px;
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

  @media(min-width: 1366px) {
    margin: 0;
    h2 {
      font-size: 32px;
    }
  }

`

export const Slider = styled.div`
  
  width: 1120px;
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
  
  @media(min-width: 1366px) {
    width: 100%;
    height: 462px;
    overflow: hidden;
    margin-bottom: 48px;

    .mobileOnly {
      display: none;
    }

    .desktopOnly {
      display: block;
    }

    .buttonLeft, .buttonRight {
      position: absolute;
      width: 277px;
      height: 462px;
      z-index: 99;  
    }

    .buttonLeft {
      left: 122px;
      background: linear-gradient(270deg, rgba(0, 10, 15, 0.272541) 0%, ${({ theme }) => theme.COLORS.DARK_400} 100%);
    }
    
    .buttonRight {
      right: 122px;
      background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, ${({ theme }) => theme.COLORS.DARK_400} 100%);
    }
  }

  @media(width: 1920px) {

    width: 1220px;

    .buttonLeft {
      left: 277px;
    }

    .buttonRight {
      right: 277px;
    }
  }

`