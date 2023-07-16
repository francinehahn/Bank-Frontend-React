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
        --mediumgrey: #ececec;
        --darkgrey: #898888;
        --white: #ffffff;
        --light-purple: #e8c1ff;
        --purple: #6f00b0;
        --black: rgb(0, 0, 0);
    }
`