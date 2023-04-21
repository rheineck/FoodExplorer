import styled from "styled-components";

export const Container = styled.section`
  width: 1122px;
  height: 100%;
  margin-top: 48px;
  
  h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 32px;
    margin-bottom: 23px;
  }

  button {
    border: none;
  }

  svg {
    width: 40px;
    height: 40px;
  }

`

export const Slider = styled.div`
  width: 1366px;
  height: 462px;
  overflow: hidden;
  display: flex;

  > div {
    display: flex;
    gap: 16px;
  }

  .buttonLeft, .buttonRight {
    position: absolute;
    width: 277px;
    height: 462px;
    z-index: 99;

  }
  .buttonLeft {
    left: 277px;
    background: linear-gradient(270deg, rgba(0, 10, 15, 0.272541) 0%, ${({ theme }) => theme.COLORS.DARK_400} 100%);
  }
  
  .buttonRight {
    right: 277px;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, ${({ theme }) => theme.COLORS.DARK_400} 100%);
  }

`