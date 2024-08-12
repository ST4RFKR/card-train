import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    :after,
    :before {
        margin: 0;
        padding: 0;
    }
    html{
        font-size: 62.5%;
    }

    body {
        box-sizing: border-box;
        background-color: #4d4949
    }
`