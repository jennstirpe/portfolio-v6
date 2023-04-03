import styled from "styled-components";

export const StyledNav = styled.nav`
    .nav-list {
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        
        .nav-item {
            padding: 1rem;
            font-size: clamp(1rem, 0.3824rem + 2.8235vw, 2.5rem);
            font-weight: 400;
            border: none;
            background: transparent;
            letter-spacing: 2px;
            text-transform: uppercase;

            &:hover {
                cursor: pointer;
            }
        }
    }

    @media (min-width: 992px) { 
        margin-left: 25%;
    }
`;