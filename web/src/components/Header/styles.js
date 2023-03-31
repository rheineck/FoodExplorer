import styled from "styled-components";

export const Container = styled.div`
  height: 12rem;
  width: 100%;
  padding: 5.6rem 2.8rem 2.4rem;
  background: ${({ theme }) => theme.COLORS.DARK_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: none;
  }

  h1 {
    font-size: 21.1629px;
  }

  .popup {
    position: absolute;
    
    
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
  }
`