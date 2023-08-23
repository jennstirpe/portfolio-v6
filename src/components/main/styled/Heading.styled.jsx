import styled from "styled-components";

export const StyledHeading = styled.section`
    position: relative;
    height: 87vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;

    .heading-name {
        font-size: clamp(2.5rem, 1.4706rem + 4.7059vw, 5rem);
        text-transform: uppercase;
        letter-spacing: 2px;
        background: #041B3D;
        background: linear-gradient(to top right, #041B3D 0%, #1169AC 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .heading-title {
        font-size: clamp(1rem, 0.5882rem + 1.8824vw, 2rem);
        font-weight: 300;
        letter-spacing: 4px;
        text-align: right;
        color: ${({theme}) => theme.colors.accentDark};
    }
    
    .socials {
        list-style: none;
        display: flex;
        justify-content: center;
        margin: 1rem 1.5rem;

        .social {
            margin: .25rem;
            
            i {
                font-size: 2rem;
                color: ${({theme}) => theme.colors.accentDark};
                transition: ${({theme}) => theme.transition};

                &:hover {
                    color: ${({theme}) => theme.colors.textLight};
                    box-shadow: 1px 1.6px 2.2px rgba(0, 0, 0, 0.022),
                        2.6px 4.2px 5.6px rgba(0, 0, 0, 0.031),
                        5.3px 8.5px 11.3px rgba(0, 0, 0, 0.039),
                        11px 17.5px 23.4px rgba(0, 0, 0, 0.048),
                        30px 48px 64px rgba(0, 0, 0, 0.07);
                }
            }
        }
    }

    @media (min-width: 992px) { 
        flex-direction: row;
        
        .socials {
            flex-direction: column;
        }
    }
`;