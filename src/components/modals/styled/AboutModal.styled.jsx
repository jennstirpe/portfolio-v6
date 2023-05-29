import styled from "styled-components";

export const StyledAboutModal = styled.section`

    .about-desc {
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

        .about-resume {
            text-decoration: none;
            padding: .5rem 1rem;
            border-radius: 1.5rem;
            letter-spacing: 1px;
            transition: all 150ms linear;
            background: ${({theme}) => theme.colors.accentDark};
            border: 1px solid ${({theme}) => theme.colors.textLight};
            color: ${({theme}) => theme.colors.textLight};

            &:hover {
                background: ${({theme}) => theme.colors.cardBg};
                color: ${({theme}) => theme.colors.textDark};
                border: 1px solid ${({theme}) => theme.colors.textDark};
                box-shadow: 0 .25rem .25rem ${({theme}) => theme.colors.textDark}50;
            }
        }

        .tech-list {
            border: 1px solid ${({theme}) => theme.colors.accentDark}50;
            width: 100%;
            padding: .25rem 0;
            border-radius: .5rem;
            list-style: none;
            display: flex;
            justify-content: space-evenly;

            .tech-list-item {
                position: relative;
                height: 3.5rem;
                width: 3.5rem;
                padding: .25rem;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            }

            .tooltip {
                position: absolute;
                text-align: center;
                top: 0;
                font-size: .75rem;
                background: #ffffff;
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
                background: #ffffff;
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

        .about-socials {
            width: 50%;
            display: flex;
            justify-content: space-evenly;
            list-style: none;

            .about-social {
                font-size: 1.75rem;

                a {
                    color: ${({theme}) => theme.colors.accentDark};
                    transition: all 150ms linear;
                    
                    &:hover {
                        color: ${({theme}) => theme.colors.textLight};
                    }
                }  
            }
        }
    }
`;