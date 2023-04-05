import styled from "styled-components";

export const StyledMain = styled.main`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .main-project-btn {
        margin-top: 2rem;
        padding: 1rem;
        font-size: 1.25rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 4px;
        border-radius: 1.75rem;
        border: 2px solid ${({theme}) => theme.colors.textLight};
        background: transparent;
        color: ${({theme}) => theme.colors.textLight};
        transition: all 150ms linear;

        &:hover {
            cursor: pointer;
            border: 2px solid transparent;
            background: ${({theme}) => theme.colors.accentLight}75;
            box-shadow: 1px 1.6px 2.2px rgba(0, 0, 0, 0.022),
                2.6px 4.2px 5.6px rgba(0, 0, 0, 0.031),
                5.3px 8.5px 11.3px rgba(0, 0, 0, 0.039),
                11px 17.5px 23.4px rgba(0, 0, 0, 0.048),
                30px 48px 64px rgba(0, 0, 0, 0.07);
        }
    }
`;