import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 197px;
  max-width: 280px;

  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
  > img {
    height: 30px;
    width: 30px;
    margin-right: 12px;
  }
`