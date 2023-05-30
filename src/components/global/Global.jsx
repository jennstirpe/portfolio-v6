import { createGlobalStyle } from "styled-components";
import bgimg from "../../../public/assets/bgclouds.jpg"


const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        position: relative;
        height: 100vh;
        width: 100vw;
        font-family: 'Quicksand', sans-serif;
        font-weight: 300;
        background-color: #f1f5f4;
        background-image: url(${bgimg});
        background-repeat: no-repeat;
        animation: slidebg 90s forwards infinite alternate;
        -webkit-animation: slidebg 90s forwards infinite alternate;

        @-webkit-keyframes slidebg {
        from {background-position: top; background-size:3500px; }
        to {background-position: -100px 0px; background-size:3750px;}
        }

        @keyframes slidebg {
        from {background-position: top; background-size:3500px; }
        to {background-position: -100px 0px; background-size:3750px;}
        }

        h1, h2, h3, h4, h5, h6 {
            font-weight: 700;
        }

        button, a {
            &:hover {
                cursor: pointer;
            }
        }

        .modal {
            width: 90%;
            max-width: 40rem;
            background: #fff;
            position: absolute;
            padding: 1rem 1.5rem;
            top: 4rem;
            left: 0;
            right: 0;
            margin: auto;
            border-radius: .25rem;
            box-shadow: 1px 1.6px 2.2px rgba(0, 0, 0, 0.022),
                2.6px 4.2px 5.6px rgba(0, 0, 0, 0.031),
                5.3px 8.5px 11.3px rgba(0, 0, 0, 0.039),
                11px 17.5px 23.4px rgba(0, 0, 0, 0.048),
                30px 48px 64px rgba(0, 0, 0, 0.07);

            .modal-header {
                text-align: center;
                text-transform: uppercase;
                letter-spacing: 4px;
                padding: 1rem 0;
                color: ${({theme}) => theme.colors.accentDark};
            }
        }
    }
`;

export default GlobalStyles;