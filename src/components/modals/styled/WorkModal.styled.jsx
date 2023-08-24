import styled from "styled-components";

export const StyledWorkModal = styled.ul`
    backdrop-filter: blur(10px);
    width: 100%;
    height: 75vh;
    position: absolute;
    bottom: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    overflow: scroll;
    padding: 1rem;

    .project {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        height: 100px;
        width: 250px;
        border-radius: 10px;
        background: #ffffff50;
        transition: 400ms;
        border: 1px solid black;

        &:hover {
            transform: scale(1.1, 1.1);
            cursor: pointer;
        }
            
        .project-title {
            font-size: 1em;
            font-weight: 700;
        }

        .project-tech {
            font-size: .7em;
        }

        .project-link {
            margin: 0 1rem;
        }

        .project-desc {
            background: #00000010;
            height: 4rem;
            font-size: .85rem;
            overflow: scroll;
            line-height: 1rem;
            text-align: left;
            padding: .25rem;
        }
    }

    @media (min-width: 992px) { 
        width: 90%;
        height: 40vh;
        left: 0;
        right: 0;
        margin: 0 auto;
        flex-direction: row;
    }
`;