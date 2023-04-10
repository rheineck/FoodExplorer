import styled from "styled-components";

export const Container = styled.footer`
  height: 77px;
  width: 100vw;
  padding: 29px 26px;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  justify-content: space-between;
  
  h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    font-size: 1.6rem;
  }

  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-size: 1.2rem;
  }

  .brand {
    display: flex;
    gap: 8px;

    img {
      height: 18px;
      width: 18px;
    }
  }
`
