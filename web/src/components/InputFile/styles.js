import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  cursor: pointer;
  background: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 8px;
  gap: 8px;
  
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: 'Poppins';
  font-size: 14px;

  padding: 12px 32px;

  > input {
    display: none;
  }
`