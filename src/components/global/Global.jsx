import { createGlobalStyle } from "styled-components";
import bgimg from "../../assets/bgclouds.jpg"


const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        h1, h2, h3, h4, h5, h6 {
            font-weight: 700;
        }
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
    }
`;

export default GlobalStyles;