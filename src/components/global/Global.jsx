import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        height: 100vh;
        width: 100vw;
        font-family: 'Quicksand', sans-serif;
        font-weight: 300;

        h1, h2, h3, h4, h5, h6 {
            font-weight: 700;
        }
    }
`;

export default GlobalStyles;