import styled, { ThemeContext } from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  align-items: center;
  justify-content: center;

  height: 56px;
  border: 0;
  padding: 0 16px;
  border-radius: 10px;

  font-size: 16px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
    cursor: pointer;
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400} ;
  }

  svg {
    margin-right: 8px;
  }
`