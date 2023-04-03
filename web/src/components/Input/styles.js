import styled from 'styled-components'

export const Container = styled.div`
  input {
    /* width: 100%; */
    height: 4.8rem;
    border: none;
    border-radius: 8px;
    padding: 1.2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    background: ${({ theme }) => theme.COLORS.DARK_900};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`