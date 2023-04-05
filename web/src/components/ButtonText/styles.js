import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 14px;
  }

`