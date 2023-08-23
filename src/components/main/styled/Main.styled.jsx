import styled from "styled-components";

export const StyledMain = styled.main`
    max-height: 100vh;
    overflow: hidden;

    .work-modal_btn {
        position: absolute;
        bottom: 3rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        padding: 1rem;
        font-size: clamp(0.75rem, 0.6471rem + 0.4706vw, 1rem);
        font-weight: 600;
        border: none;
        background: transparent;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: ${({theme}) => theme.colors.textLight};
        transition: ${({theme}) => theme.transition};

            &:hover {
                cursor: pointer;
                color: ${({theme}) => theme.colors.textLight}50;
            }
    }

    .open {
        bottom: 75vh;
        background: #ffffff50;
    }

    @media (min-width: 992px) {
        .open {
            bottom: 40vh;
        }
    }
`;