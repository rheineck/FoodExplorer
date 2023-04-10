import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 24px;

  height: 318px;
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
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 12px;

    svg {
      height: 14px;
      width: 14px;
    }
  }

  .includeDishes {
    display: flex;
    gap: 14px;
    margin-bottom: 16px;

    span {
      font-size: 16px;
    }
  }
`