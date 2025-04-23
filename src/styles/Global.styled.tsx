import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme.tsx";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }
    
    li {
        list-style: none;
    }
    
    a,
    a:visited {
        text-decoration: none;
    }
    
    a:hover {
        text-decoration: none;
    }
    
    button {
        background-color: unset;
        cursor: pointer;
        color: ${theme.colors.font};
        
    }
    
    img {
        vertical-align: top;
    }
    
    section{
        padding: 100px 0;
    }
    
    section:nth-of-type(odd) {
        background-color: ${theme.colors.primaryBg};
    }
    
    section:nth-of-type(even) {
        background-color: ${theme.colors.secondaryBg};
    }
    
   
    body {
        margin: 0;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        line-height: 1.2;
    }

    a{
        color: ${theme.colors.font};
    }

    h3 {
        font-family: "Josefin Sans", sans-serif;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.06em;
    }

    p{
        font-weight: 400;
        font-size: 14px;
        line-height: 1.4;
    }

`;
