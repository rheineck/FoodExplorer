import styled from "styled-components";

export const Container = styled.div`
  grid-template-areas: 
  'header'
  'content'
  'footer'
  ;
  `

export const Content = styled.div`
  grid-area: content;
  margin: 56px 35px 150px;

  h1 {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    margin-bottom: 32px;
  }

  .payment {
    width: 355px;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_700};
    border-radius: 6px;
    background: ${({ theme }) => theme.COLORS.DARK_1000};
    padding: 32px;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 36px;
    line-height: 120%;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`