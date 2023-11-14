import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family:  'Ubuntu';
        src: url("../components/Assets/fonts/Ubuntu/Ubuntu-Regular.ttf") format(truetype);
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
           width: 0.3rem; 
        }
        &::-webkit-scrollbar-thumb{
            background-color: grey;
            border-radius: 3px
        }
        &::-webkit-scrollbar-track{
            background-color: white;
        }
    }
    body{
        font-family: 'Ubuntu', sans-serif;
    }
`;

export default GlobalStyles;