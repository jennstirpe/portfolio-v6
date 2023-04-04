import styled from "styled-components";

export const StyledNav = styled.nav`
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

            &:hover {
                cursor: pointer;
            }
        }
    }

    @media (min-width: 992px) { 
        margin-left: 45%;
    }
`;