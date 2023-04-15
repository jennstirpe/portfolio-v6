import styled from "styled-components";

export const StyledProject = styled.article`
    padding: 2rem 1rem;
    letter-spacing: 1px;   
    height: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    .project-preview {
        height: 12.5rem;
        width: 22rem;
        background-size: cover;
        background-position: center;
        margin-bottom: 1rem;
        border-radius: .5rem;
        box-shadow: 0 0 1rem #00000050;
    }

    .project-info-modal {
        position: relative;
        padding: 2.25rem 1.75rem;
        border: 1px solid ${({theme}) => theme.colors.textLight}20;
        margin: 1rem 0;
        border-radius: .5rem;
    }

    .project-header {
        padding-bottom: .5rem;
        width: 70%;
        min-width: 22rem;

        .project-name {
            font-size: clamp(1.5rem, 0.9853rem + 2.3529vw, 2.75rem);
            text-align: center;
            font-weight: 700;
            color: ${({theme}) => theme.colors.textLight};
            letter-spacing: 2px;
            margin-top: 1rem;
        }

        .project-tech {
            height: 1.25rem;
            font-size: clamp(0.5rem, 0.3353rem + 0.7529vw, 0.9rem);
            font-weight: 400;
            color: ${({theme}) => theme.colors.accentDark};
            border-right: 1px solid ${({theme}) => theme.colors.accentDark}90;
            padding-right: .25rem;
            text-align: right;
        }
    }

    .links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 75%;
        max-width: 20rem;

        .open-desc {
            border: none;
            border-radius: 1.5rem;
            padding: .75rem 1rem;
            font-size: 1rem;
            letter-spacing: 1px;
            background: ${({theme}) => theme.colors.textLight}10;
            transition: all 250ms linear;
            color: ${({theme}) => theme.colors.textLight};
            text-transform: uppercase;

            &:hover {
                cursor: pointer;
                font-weight: 400;
                background: ${({theme}) => theme.colors.textLight}50;
            }
        }

        .link {
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 700;
            color: ${({theme}) => theme.colors.textLight};
            transition: all 150ms linear;
            font-size: .9rem;

            &:hover {
                color: ${({theme}) => theme.colors.textLight}50;
                font-weight: 400;
            }
        }
    }
`;