import styled from "styled-components";

export const StyledProject = styled.article`
    letter-spacing: 1px;
    border: 2px solid transparent;
    display: flex;
    align-items: center;
    transition: all 150ms linear;

    &:hover {
        box-shadow: none;
        border: 2px solid ${({theme}) => theme.colors.accentDark}40;
        border-radius: .6rem;
        cursor: pointer;
    }
    
    .project-preview {
        height: 6rem;
        min-width: 8.75rem;
        background-size: cover;
        background-position: center;
        border-top-left-radius: .5rem;
        border-bottom-left-radius: .5rem;
        margin-right: .75rem;
    }

    .project-name {
        font-size: clamp(1.15rem, 0.8rem + 1.6vw, 2rem);
        color: ${({theme}) => theme.colors.textLight};
        letter-spacing: 2px;
    }

    .project-tech {
        font-size: clamp(0.5rem, 0.3353rem + 0.7529vw, 0.9rem);
        font-weight: 400;
        color: ${({theme}) => theme.colors.accentDark};
    }

    .project-info-modal {
        position: absolute;
        max-width: 30rem; 
        top: 25%;
        margin: auto;
        left: 0;
        right: 0;
        z-index: 10;
        background: ${({theme}) => theme.colors.cardBg};
        padding: 2rem;
        border-radius: .5rem;
        box-shadow: 0 0 10rem ${({theme}) => theme.colors.textDark}50;

        &:hover {
            cursor: auto;
        }

        .preview-img {
            width: 100%;
            margin: .5rem 0;
            border-radius: .5rem;
            border: 2px solid #00000010;
        }

        .project-desc {
            line-height: 1.5rem;
            margin: .5rem 0;
            font-size: clamp(0.85rem, 0.7882rem + 0.2824vw, 1rem);
        }

        .links {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 1.5rem;

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
    }

    @media (min-width: 992px) { 
        width: 22rem;
        flex-direction: column;
        padding-bottom: 1rem;

        &:hover {
            border: 2px solid transparent;
            box-shadow: 0 0 1.5rem ${({theme}) => theme.colors.accentDark}40;
        }

        .project-preview {
            height: 10rem;
            width: 22rem;
            border-top-right-radius: .5rem;
            border-bottom-left-radius: 0;
            margin-right: 0;
            margin-bottom: 1rem;
        }

        .project-header {
            width: 100%;
            padding: .75rem;
        }
    }
`;