import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {

        /* ===== colors ====== */
        --color-primaryLight: #fff;
        --color-primary: #00518a;
        --color-beigeLight: rgb(195, 177, 154, 0.8);
        --color-linear--default: linear-gradient(118deg, var(--color-primary), transparent);
        --color-linear--secondary: linear-gradient(118deg, rgb(215, 164, 0), transparent);


        /* ------- skew -------- */
        --skew-default: scale(1.07, 1.05) skewX(-30deg);
        --skew-default-opposite: scale(1.07, 1.05) skewX(+30deg);

        /* ------- shadow ------- */
        --shadow-default: rgba(5, 5, 5, 0.16) 0 10px 36px 0, rgba(6, 6, 6, 0.06) 0 0 0 1px;
        --shadow-default-secondary: rgb(38, 57, 77) 0 20px 30px -10px;
        font-family: "Roboto Condensed", sans-serif;

        
        margin: 0;
        padding: 0;
    }

    body {

        margin: 0;
        padding: 0;

    }

    * {
        margin: 0;
        padding: 0;
    }
    
`;
