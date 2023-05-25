import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 197px;
  max-width: 280px;

  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
  > img {
    height: 30px;
    width: 30px;
    margin-right: 12px;
  }

  span {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-weight: 400;
    font-size: 12px;
    margin-left: 8px;
  }

  .desktopOnly {
    display: flex;
    align-items: center;
  }

  @media(min-width: 1366px) {
    .desktopOnly {
      flex-direction: column;
      align-items: flex-end;
    }
  }
`