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
`