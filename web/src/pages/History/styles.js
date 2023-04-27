import styled from "styled-components";

export const Container = styled.div`

  @media(min-width: 1366px) {
    table {
      border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
      border-radius: 8px 8px 0 0;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-family: 'Roboto';
      font-weight: 400;
    }

    thead {
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      height: 64px;
    }
  }
`