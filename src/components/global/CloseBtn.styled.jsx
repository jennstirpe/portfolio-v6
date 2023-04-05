import styled from "styled-components";

export const StyledCloseBtn = styled.button`
    position: absolute;
    top: .25rem;
    right: .25rem;
    padding: .5rem;
    font-size: 1.25rem;
    border: none;
    background: transparent;
    color: ${({theme}) => theme.colors.textDark};
    transition: all 150ms linear;

    &:hover {
        cursor: pointer;
        color: ${({theme}) => theme.colors.textLight};
    }
`;