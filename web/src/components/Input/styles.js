import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.DARK_900};

  margin-bottom: 8px;
  border-radius: 10px;


  > input {
    height: 48px;
    border: 0;
    padding: 12px;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    background: transparent;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  svg {
      height: 24px;
      width: 24px;
      margin: 12px 20px;
    }
`