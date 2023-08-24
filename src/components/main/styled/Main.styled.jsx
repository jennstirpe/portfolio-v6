import styled from "styled-components";

export const StyledMain = styled.main`
    max-height: 100vh;
    overflow: hidden;

    .work-modal_btn {
        position: absolute;
        bottom: 20vh;
        left: 0;
        right: 0;
        margin: 0 auto;
        padding: .75rem 0;
        font-size: clamp(0.95rem, 0.9294rem + 0.0941vw, 1rem);
        font-weight: 600;
        border: none;
        /* background: transparent; */
        background: #ffffff30;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: ${({theme}) => theme.colors.textLight};
        transition: ${({theme}) => theme.transition};
        display: flex;
        align-items: center;
        justify-content: center;
        /* border: 1px solid ${({theme}) => theme.colors.textLight}; */
        max-width: 8rem;
        /* border-radius: .25rem; */
        border-radius: 10rem;
        box-shadow:
            4.3px 4.9px 5.3px rgba(0, 0, 0, 0.028),
            14.5px 16.3px 17.9px rgba(0, 0, 0, 0.042),
            65px 73px 80px rgba(0, 0, 0, 0.07);

        &:hover {
            cursor: pointer;
            color: ${({theme}) => theme.colors.textLight}50;
        }
    }

    .open {
        color: ${({theme}) => theme.colors.textLight}70;
        border: none;
        bottom: 75vh;
        background: #ffffff50;
        max-width: 6.5rem;
    }

    @media (min-width: 992px) {
        .open {
            bottom: 30vh;
            z-index: 10;
        }
    }
`;