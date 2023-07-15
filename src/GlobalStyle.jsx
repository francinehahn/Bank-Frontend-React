import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Montserrat", "sans serif";
    }

    :root {
        --lightgrey: #f6f6f6;
        --purple: #9500eb;
        --black: rgb(0, 0, 0);
    }
`