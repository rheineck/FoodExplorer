import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  
  margin: 15.8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    display: none;
  }

  @media(min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    
    margin: 0 15.4rem 0 10.8rem;

    .title{
      display: block;
      text-align: center;
      margin-bottom: 3.2rem;
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 3.2rem;

      width: 100%;
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

  @media(min-width: 1200px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    height: 540px;
    width: 480px;
    border-radius: 1.6rem;

    padding: 6.4rem;

    input, button {
      width: 100%;
    }
  }
`

