import styled from "styled-components";

export const StyledProjectSection = styled.section`
    background: #2b2d42;
    height: 100vh;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content:  center;
    align-items: center;

    .section-header {
        color: #fff;
        width: 100%;
        margin: 1rem 0;
        padding-bottom: .5rem;
        font-size: 2rem;
        text-transform: uppercase;
        border-bottom: 1px solid #fff;
    }

    .projects-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        list-style: none;
        overflow: scroll;
    }

    @media (min-width: 992px) {
        
        .projects-list {
            max-width: 50rem;
        }
    }
`;