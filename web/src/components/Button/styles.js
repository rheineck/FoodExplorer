import styled from "styled-components";

export const Container = styled.button`
  border: none;
  border-radius: 8px; 
  width: 316px;
  height: 48px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background: ${({ theme }) => theme.COLORS.TOMATO_100};

  &:hover {
    background: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

`