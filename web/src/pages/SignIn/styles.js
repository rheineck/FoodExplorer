import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  
  padding: 15.8rem 6.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    display: none;
  }

  .brand {
    display: flex;
    font-size: 38px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: 'Roboto';
    font-weight: 700;

    > img {
      height: 42px;
      width: 42px;
      margin-right: 12px;
    }
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
  margin-bottom: 3.2rem;
  width: 100%;
  align-items: center;

  div {
    margin-bottom: 32px;
  }

  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.6rem;
    margin-bottom: 8px;
  
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  button {
    width: 100%;
  }

  a {
    font-size: 14px;
    display: flex;
    justify-content: center;
    margin-top: 32px;
  }

  @media(min-width: 1200px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    height: 62rem;
    width: 48rem;
    border-radius: 1.6rem;

    padding: 6.4rem;

    input, button {
      width: 100%;
    }
  }
`

