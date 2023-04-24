import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
`

export const Content = styled.div`
  grid-area: content;
  
  section:last-child {
    margin-bottom: 48px;
  }
  
  @media(min-width: 1366px) {
    margin-left: 124px;
    margin-right: 124px;
  }
`