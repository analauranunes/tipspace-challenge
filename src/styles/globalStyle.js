import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: none;
        font-family: 'Chakra Petch', sans-serif;
    }
    
    :root{
        background-color: orange;
    }

    h1{
        font-family: 'Amatic SC', cursive;
    }

    button{
        cursor: pointer;
    }
`;
