import styled from "styled-components";

export const StyledMain = styled.main`
    border: 1px solid green;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .main-project-btn {
        margin-top: 4rem;
        padding: 1rem;
        font-size: 1.25rem;
        letter-spacing: 1px;
        border-radius: 1.75rem;

        &:hover {
            cursor: pointer;
        }
    }
`;