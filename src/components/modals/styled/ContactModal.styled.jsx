import styled from "styled-components";

export const StyledContactModal = styled.section`
    z-index: 5;
    width: 90%;
    max-width: 40rem;
    background: ${({theme}) => theme.colors.cardBg};
    position: absolute;
    padding: 1rem 1.5rem;
    top: 0;
    border-radius: .25rem;
    box-shadow: 1px 1.6px 2.2px rgba(0, 0, 0, 0.022),
        2.6px 4.2px 5.6px rgba(0, 0, 0, 0.031),
        5.3px 8.5px 11.3px rgba(0, 0, 0, 0.039),
        11px 17.5px 23.4px rgba(0, 0, 0, 0.048),
        30px 48px 64px rgba(0, 0, 0, 0.07);

    .contact-header {
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 4px;
        padding: 1rem 0;
        color: ${({theme}) => theme.colors.accentDark};
    }

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