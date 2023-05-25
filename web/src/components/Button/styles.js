import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme, isRed }) => isRed ? theme.COLORS.TOMATO_100 : theme.COLORS.DARK_800 };

  display: flex;
  align-items: center;
  justify-content: center;

  height: 56px;
  border: 0;
  padding: 0 16px;
  border-radius: 10px;

  font-size: 16px;
  font-weight: 500;

  > span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    white-space: nowrap; 
  }

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