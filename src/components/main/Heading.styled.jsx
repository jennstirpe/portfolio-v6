import styled from "styled-components";

export const StyledHeading = styled.section`

    .heading-name {
        font-size: clamp(2.5rem, 1.4706rem + 4.7059vw, 5rem);
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .heading-title {
        font-size: clamp(1rem, 0.5882rem + 1.8824vw, 2rem);
        font-weight: 300;
        letter-spacing: 4px;
        text-align: right;
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
            }
        }
    }

    @media (min-width: 992px) { 
        display: flex;
        
        .socials {
            flex-direction: column;
        }
    }
`;