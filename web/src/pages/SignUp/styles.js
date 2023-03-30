import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  
  margin: 15.8rem 6.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    display: none;
  }

  @media(min-width: 500px) {
    .title{
      display: flex;
      margin-bottom: 3.2rem;
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 3.2rem;
    }
  }

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

  @media(min-width: 500px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    height: 62rem;
    width: 48rem;
    border-radius: 1.6rem;

    padding: 6.4rem;

    input {
      height: 7.2rem;
      width: 34.8rem;
    }
  }
`

