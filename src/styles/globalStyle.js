import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        margin: 0;
        padding: 0;
        border: none;
        font-family: 'Chakra Petch', sans-serif;
    }
    h1{
        font-family: 'Amatic SC', cursive;
    }

    button{
        cursor: pointer;
    }
`;
