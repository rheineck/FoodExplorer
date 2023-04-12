import styled from "styled-components";

export const Container = styled.div`
  
  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 24px;
    display: flex;
    align-items: center;
  }

`