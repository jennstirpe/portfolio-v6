import styled from "styled-components";

export const StyledAboutModal = styled.section`

    .about-body {
        padding: 1.25rem;
        margin: 1rem;
        line-height: 1.5rem;
        height: 18rem;
        border: 1px solid ${({theme}) => theme.colors.accentDark}20;
        border-radius: .25rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        .tech-list {
            width: 100%;
            padding: .25rem 0;
            list-style: none;
            display: flex;
            justify-content: space-evenly;

            .tech-list-item {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

                i {
                    font-size: 1.75rem;
                    color: ${({theme}) => theme.colors.textLight};
                }
            }

            .tooltip {
                position: absolute;
                text-align: center;
                top: 0;
                font-size: .75rem;
                background: ${({theme}) => theme.colors.white};
                width: 5rem;
                padding: .25rem .5rem;
                border-radius: .5rem;
                box-shadow: 0 .65rem .65rem rgba(0, 0, 0, 0.1);
                opacity: 0;
                pointer-events: none;
                transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            }

            .tooltip::before {
                position: absolute;
                content: "";
                height: .5rem;
                width: .5rem;
                background: ${({theme}) => theme.colors.white};
                bottom: -.18rem;
                left: 50%;
                transform: translate(-50%) rotate(45deg);
                transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            }

            .tech-list-item:hover .tooltip {
                top: -1.75rem;
                opacity: 1;
                visibility: visible;
                pointer-events: auto;
            }

            svg:hover span, svg:hover .tooltip {
                text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
            }
        }

        .about-desc {
            padding: .75rem;
            margin: 1rem 0;
            border-top: 1px solid ${({theme}) => theme.colors.accentDark}50;
            border-bottom: 1px solid ${({theme}) => theme.colors.accentDark}50;
            color: ${({theme}) => theme.colors.textDark};

            .about-desc-item {
                display: flex;
                align-items: flex-start;

                svg {
                    margin-right: 1rem;
                    height: 1.15rem;
                    width: 1.15rem;
                    min-height: 1.15rem;
                    min-width: 1.15rem;
                }

                p {
                    font-size: clamp(0.65rem, 0.5758rem + 0.3394vw, 1rem);

                    span {
                        font-size: clamp(0.5rem, 0.4258rem + 0.3394vw, 0.85rem);
                        opacity: .75;
                        display: block;
                        margin: 0;
                    }
                }
            }
        }

        .about-socials {
            width: 50%;
            display: flex;
            justify-content: space-evenly;
            list-style: none;

            .about-social {
                font-size: 1.5rem;

                a {
                    color: ${({theme}) => theme.colors.accentDark};
                    transition: ${({theme}) => theme.transition};
                    
                    &:hover {
                        color: ${({theme}) => theme.colors.textLight};
                    }
                }  
            }

            .about-resume {
                text-decoration: none;
                padding: .25rem .75rem;
                margin: 0 .25rem;
                border-radius: 1.5rem;
                transition: ${({theme}) => theme.transition};
                border: 1px solid ${({theme}) => theme.colors.white}00;
                color: ${({theme}) => theme.colors.textLight};

                &:hover {
                    border: 1px solid ${({theme}) => theme.colors.textLight}75;
                }
            }
        }
    }
`;