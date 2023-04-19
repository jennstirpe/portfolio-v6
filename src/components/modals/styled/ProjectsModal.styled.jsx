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
`;