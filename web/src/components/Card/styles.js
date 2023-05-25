import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 24px;

  height: 100%;
  width: 210px;
  border-radius: 8px;

  background: ${({ theme }) => theme.COLORS.DARK_200};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  .includeButton {
    width: 162px;
    height: 32px;
    font-size: 14px;
    border-radius: 5px;
  }

  .favorite {
    position: relative;
    top: 16px;
    right: -74px;
  }

  > img {
    height: 88px;
    width: 88px;
  }

  img, h1 {
    margin-bottom: 12px;
  }


  h1 {
    font-weight: 400;
    font-size: 1.6rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
  
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    
    button {
      font-size: 14px;
      font-weight: 500;
    }

    svg {
      height: 14px;
      width: 14px;
    }
  }

  .includeDishes {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-bottom: 16px;

    span {
      font-size: 16px;
    }
  }

  .desktopOnly {
    display: none;
  }

  @media(min-width: 1366px) {
    width: 304px;
    height: 462px;
    padding: 0;

    img {
      height: 176px;
      width: 176px;
    }
    
    h1 {
      font-size: 32px;
    }

    .favorite {
      top: 16px;
      right: -120px;
    }

    .desktopOnly {
      display: flex;
      font-family: 'Roboto';
      font-size: 14px;
      font-weight: 400;
      margin: 15px 24px;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      text-align: center;
    }

    .title {
      margin-bottom: 0;

      button {
        font-size: 2.4rem;
        font-weight: 700;
      }

      svg {
        height: 24px;
        width: 24px;
      }
    }

    .desktopButtons {
      display: flex;
      gap: 16px;
    }

    .includeDishes {
      margin-bottom: 0;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 20px;
      font-weight: 700;
      font-family: 'Roboto';
    }

    .includeButton {
      width: 92px;
      height: 48px;
    }
  }
`