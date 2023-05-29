import styled from "styled-components";

export const StyledProject =  styled.div`
    height: 15rem;
    width: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .5rem;
    background: linear-gradient(217deg, rgba(146, 92, 254,.8), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(186, 255, 255,.8), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(37, 101, 204,.8), rgba(0,0,255,0) 70.71%);
    transition: all 1s linear;

    .project-card {
        height: 14.35rem;
        width: 14.35rem;
        background-size: cover;
        background-position: center;
    }

    &:hover {
        cursor: pointer;
        
    }
`;