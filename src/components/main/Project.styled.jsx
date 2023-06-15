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
        display: flex;
        justify-content: center;
        align-items: flex-end;

        &:hover {
            cursor: pointer;
        }

        .status {
            position: absolute;
            background: #00000050;
            color: white;
            padding: 1rem;
            text-align: center;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .status-name {
                font-size: 1.5rem;
            }

            .status-desc {
                font-size: .85rem;
            }
        }

        .project-details {
            position: relative;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #000000;
        }

        .project-details {
            
            .project-name {
                color: #fff;
                font-size: 1.5rem;
                text-align: center;
            }

            .project-tech-list {
                margin-bottom: 1rem;

                .project-tech {
                    color: #fff;
                    margin: 0 .25rem;
                    font-size: .85rem;
                }
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

        .card-header {
            color: white;
            background: #00000099;
            width: 100%;
            padding: .25rem 0;
            box-shadow: 0 0 1rem #00000095;

            .card-header-name, .card-header-status {
                text-align: center;
            }

            .card-header-status {
                font-size: .85rem;
            }
        }

        .project-desc-modal {
            height: 100%;
            padding: 1.5rem 1rem 1rem 1rem;
            background: #00000099;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;

            .close-btn {
                position: absolute;
                top: .25rem;
                right: .25rem;
                background: none;
                border: none;

            }

            .project-desc {
                font-size: clamp(0.75rem, 0.697rem + 0.2424vw, 1rem);
                letter-spacing: 1px;
            }
        }
    }
`;