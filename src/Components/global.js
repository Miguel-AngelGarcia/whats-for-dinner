//global
import { createGlobalStyle } from "styled-components";

//the theme is available because we’ve wrapped our global styles with ThemeProvider.

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%
    }
    
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        background: ${({ theme }) => theme.primaryDark};
        color: ${({ theme }) => theme.primaryLight};
        display: flex;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        height: 100vh;
        justify-content: center;
        text - rendering: optimizeLegibility;
    }
    `;
