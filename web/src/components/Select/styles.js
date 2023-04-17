import styled from "styled-components";

export const Container = styled.select`
  width: 100%;
  height: 48px; 
  background: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 16px;
  padding: 13px 16px;

  
`