import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  width: fit-content;
  height: 32px;
  padding: 4px 8px;
  border-radius: 5px;
`