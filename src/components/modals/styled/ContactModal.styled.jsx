import styled from "styled-components";

export const StyledContactModal = styled.section`

    .contact-form {
        display: flex;
        flex-direction: column;

        input, textarea {
            padding: .5rem;
            margin: .35rem .25rem;
            font-family: 'Quicksand', sans-serif;
            border-radius: .5rem;
            outline: none;
            border: none;

            &::placeholder {
                color: ${({theme}) => theme.colors.textDark}70;
            }
            
            &:hover {
                cursor: pointer;
                background: ${({theme}) => theme.colors.textLight}15;
            }
        }

        #contact__submit {
            background: ${({theme}) => theme.colors.textLight}25;
            
            &:hover {
                background: ${({theme}) => theme.colors.textLight}50;
            }
        }
    }
`;