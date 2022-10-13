import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'HS-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/HS-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

    body {
        font-family: 'HS-Regular', "Arial", sans-serif;
        padding-top: 1em;
        white-space: pre-wrap;
    }

    ul, ol {
        list-style: none;
        padding-left: 0px;
    }
`;

export default GlobalStyle;
