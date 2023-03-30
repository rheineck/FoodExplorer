import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  
  margin: 15.8rem 6.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;


`

export const Form = styled.form`
  margin-top: 7.3rem;

  input {
    margin-bottom: 3.2rem;
  }

  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.6rem;
    margin-bottom: 8px;
  
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`

