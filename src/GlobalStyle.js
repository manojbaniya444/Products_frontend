import { createGlobalStyle } from "styled-components";

export const Style = createGlobalStyle`


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
    @media (max-width: 772px) {
        font-size: 14px;
    }
    @media (max-width: 400px) {
        font-size: 12px;
    }
}



`;
