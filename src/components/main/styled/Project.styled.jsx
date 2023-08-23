import styled from "styled-components";

export const StyledProject =  styled.div`
    /* margin: .5rem; */
    /* width: 100%; */

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 100px;
    width: 250px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: 400ms;

    .project-title {
        font-size: 1em;
        font-weight: 700;

        &:hover {
            transform: scale(1.1, 1.1);
        }
    }

    .cards:hover > .card:not(:hover) {
        filter: blur(10px);
        transform: scale(0.9, 0.9);
    }




`;