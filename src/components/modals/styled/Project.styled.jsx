import styled from "styled-components";

export const StyledProject = styled.article`
    padding: 1rem;
    letter-spacing: 1px;

    .project-header {
        display: flex;
        justify-content: space-between;

        .project-name {
            font-size: 1.75rem;
            font-weight: 700;
            color: ${({theme}) => theme.colors.textLight};
            letter-spacing: 2px;
        }

        .project-tech {
            height: 1rem;
            font-size: .75rem;
            font-weight: 400;
            color: ${({theme}) => theme.colors.accentDark};
            border-right: 1px solid ${({theme}) => theme.colors.accentDark}90;
            padding-right: .25rem;
        }
    }
    
    .project-desc {
        padding: 1.25rem;
        margin: 1rem;
        line-height: 1.5rem;
        border-top: 1px solid ${({theme}) => theme.colors.accentDark}90;
        border-bottom: 1px solid ${({theme}) => theme.colors.accentDark}90;
    }

    .links {
        display: flex;
        justify-content: space-around;

        .link {
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 700;
            color: ${({theme}) => theme.colors.textLight};
            transition: all 150ms linear;

            &:hover {
                color: ${({theme}) => theme.colors.textDark};
            }
        }
    }
`;