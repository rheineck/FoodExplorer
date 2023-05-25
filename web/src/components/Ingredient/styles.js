import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 8px;
    padding: 8px 16px;
    gap: 8px;
    height: 32px;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
    border-radius: 8px;

    button {
        border: none;
        background: none;
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
    }
   
    input {
        width: 100%;
        color: ${({ isNew, theme }) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
        background: transparent;
        border: none;
        
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

    }

    svg {
        height: 12px;
        width: 12px;
    }
`