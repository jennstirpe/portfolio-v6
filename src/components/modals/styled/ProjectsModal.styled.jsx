import styled from "styled-components";

export const StyledProjectsModal = styled.section`
    z-index: 10;
    max-width: 40rem;
    background: ${({theme}) => theme.colors.cardBg};
    position: absolute;
    padding: .5rem;
    top: 0;
    margin: auto;
    border-radius: .25rem;
    box-shadow: 1px 1.6px 2.2px rgba(0, 0, 0, 0.022),
        2.6px 4.2px 5.6px rgba(0, 0, 0, 0.031),
        5.3px 8.5px 11.3px rgba(0, 0, 0, 0.039),
        11px 17.5px 23.4px rgba(0, 0, 0, 0.048),
        30px 48px 64px rgba(0, 0, 0, 0.07);

    .projects-header {
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 4px;
        padding: 1rem 0;
        color: ${({theme}) => theme.colors.accentDark};
    }

    .projects-list {
        list-style: none;
    }
`;