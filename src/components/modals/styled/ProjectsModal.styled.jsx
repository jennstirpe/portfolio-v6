import styled from "styled-components";

export const StyledProjectsModal = styled.section`

    .projects-list {
        list-style: none;

        li  {
            margin: .75rem 0;
            border-radius: .60rem;
            border: 1px solid ${({theme}) => theme.colors.accentDark}20;
            box-shadow: .25rem .25rem .75rem ${({theme}) => theme.colors.accentDark}30;
            transition: all 250ms linear;
        }
    }

    @media (min-width: 992px) { 
        max-width: 65rem !important;
        max-height: 50rem;
        overflow: scroll;
        
        .projects-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            gap: 1.5rem 0;
        }
    }
`;