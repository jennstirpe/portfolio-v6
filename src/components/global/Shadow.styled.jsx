import styled from "styled-components";

export const StyledShadow = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${({theme}) => theme.colors.textDark}50;
    z-index: 5;

    &:hover {
        cursor: auto;
    }
`;