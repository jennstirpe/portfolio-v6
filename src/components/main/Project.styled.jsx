import styled from "styled-components";

export const StyledProject =  styled.div`
    height: 15rem;
    width: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .5rem;
    background: linear-gradient(217deg, rgb(146, 92, 254), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgb(186, 255, 255), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgb(37, 101, 204), rgba(0,0,255,0) 70.71%);
    transition: all 1s linear;

    .project-card {
        height: 14.35rem;
        width: 14.35rem;
        background-size: cover;
        background-position: center;
        position: relative;

        .mobile-toggle-details {
            background: #314ac8;
            border: none;
            border-top-left-radius: .25rem;
            height: 2.25rem;
            width: 2.25rem;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            right: 0;
            bottom: 0;
            box-shadow: 0 0 1rem #00000075;
            z-index: 2;
        }

        .mobile-project-details, .desktop-project-details {
            position: relative;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #00000095;
        }

        .desktop-project-details {
            display: none;
        }

        .mobile-project-details, .desktop-project-details {
            
            .project-name {
                color: #fff;
                font-size: 1.5rem;
                margin: 1rem;
                text-align: center;
            }

            .project-modal-btn {
                background: none;
                border: 2px solid white;
                padding: .75rem 1rem;
                font-size: 1rem;
                border-radius: 2rem;
                color: #fff;
                margin-bottom: 1.25rem;
                transition: all 150ms linear;

                &:hover {
                    background: #ffffff40;
                }
            }

            .project-links {
                width: 100%;
                display: flex;
                justify-content: space-evenly;

                .project-link {
                    &:hover {
                        svg {
                            stroke: #ffffff75;
                        }
                    }        
                }
            }
        }
    }

    @media (min-width: 992px) {
        .project-card {

            .mobile-toggle-details, .mobile-project-details {
                display: none
            }

            &:hover {
                cursor: pointer;
            }

            &:hover {
                .desktop-project-details {
                    display: flex;
                }

            }
        }
    }
`;