import styled from "styled-components";

export const StyledNav = styled.nav`
    position: relative;
    width: 75%;
    margin: 0 auto;

    .nav-list {
        list-style: none;
        display: flex;
        justify-content: space-between;
        
        .nav-item {
            padding: 1rem;
            font-size: clamp(0.75rem, 0.6471rem + 0.4706vw, 1rem);
            font-weight: 400;
            border: none;
            background: transparent;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: ${({theme}) => theme.colors.textLight};
            border-radius: 1rem;
            transition: ${({theme}) => theme.transition};

            &:hover {
                cursor: pointer;
                color: ${({theme}) => theme.colors.textLight}50;
            }
        }
    }

    @media (min-width: 992px) { 
        padding-left: 45%;
    }
`;