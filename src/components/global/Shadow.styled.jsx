import styled from "styled-components";

export const StyledShadow = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    background: ${({theme}) => theme.colors.textDark}75;
    z-index: 5;
`;