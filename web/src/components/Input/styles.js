import styled from 'styled-components'

export const Container = styled.div`
  input {
    width: 100%;
    height: 48px;
    border: none;
    border-radius: 8px;
    padding: 12px;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    background: ${({ theme }) => theme.COLORS.DARK_900};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`