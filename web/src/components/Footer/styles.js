import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  bottom: 0;

  height: 77px;
  width: 100vw;
  padding: 29px 26px;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  justify-content: space-between;
  
  font-family: 'Roboto';
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.LIGHT_700};
  font-size: 1.6rem;

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-size: 1.2rem;
    font-weight: 400;
  }

  .brand {
    display: flex;
    gap: 8px;

    img {
      height: 18px;
      width: 18px;
    }
  }

  @media(min-width: 1366px) {

    padding-left: 122px;
    padding-right: 122px;

    font-size: 2.4rem;

    .brand img {
      height: 30px;
      width: 30px;
    }

    > span {
      font-size: 1.4rem;
    }

  }

  @media(width: 1920px) {
    padding-left: 27.7rem;
    padding-right: 27.7rem;
  }
`
