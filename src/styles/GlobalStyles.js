import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
    :root {
        --red: #BC0000;
        --blue: #22224C;
        --green: #57D163;
        /* Gray Scale */
        --white: #ffffff;
        --gray-100: #e9ebed;
        --gray-200: #CACDD2;
        --gray-300: #9FA4A9;
        --gray-400: #73787E;
        --gray-500: #464C52;
        --gray-600: #26282B;
        --gray-700: #1B1D1F;
        --yellow: #EBE31E;
        --black: #101010;
    }

    html {
        scroll-behavior: smooth;
    }

    .no-scroll {
        overflow: hidden;
        overflow: -moz-scrollbars-none; /* Firefox */
        -ms-overflow-style: none; /* Internet Explorer / Edge */
    }

    img {
        user-select: none;
    }

    body {
        background-color: var(--white);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: 'Montserrat', sans-serif;
    }
    

    /*? Headings */
    

    .visible {
        opacity: 1 !important;
    }

    h1 {
        font-size: 48px;
        line-height: 48px;
        font-weight: 500;
        @media (max-width: 1024px) {
            font-size: 40px;
            line-height: 40px;
        }
        @media (max-width: 768px) {
            font-size: 35px;
            line-height: 35px;
        }
        @media (max-width: 575px) {
            font-size: 30px;
            line-height: 30px;
        }
    }

    h2 {
        font-size: 40px;
        line-height: 40px;
        font-weight: 600;
        @media (max-width: 1024px) {
            font-size: 32px;
            line-height: 32px;
        }
        @media (max-width: 768px) {
            font-size: 27px;
            line-height: 27px;
        }
        @media (max-width: 575px) {
            font-size: 22px;
            line-height: 22px;
        }
    }

    h3 {
        font-size: 33.2px;
        line-height: 33.2px;
        font-weight: 400;
    }

    h4 {
        font-size: 27.9px;
        line-height: 27.9px;
        font-weight: 400;
    }

    h5 {
        font-size: 30px;
        line-height: 30px;
        font-weight: 400;
    }

    h6 {
        font-size: 25px;
        line-height: 25px;
        font-weight: 400;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        line-height: normal;
        @media (max-width: 575px) {
            font-size: 14px;
        }
    }

    /* Mobile */
    @media (max-width: 575px) {
        
    } 
    // Estilo de la barra de desplazamiento para Chrome
    ::-webkit-scrollbar {
        width: 10px; /* Ancho de la barra de desplazamiento */
    }

    /* Estilo del botón de flecha (flecha de desplazamiento) en Chrome */
    ::-webkit-scrollbar-button {
        display: none;
    }

    /* Estilo de la pista (fondo) de la barra de desplazamiento en Chrome */
    ::-webkit-scrollbar-track {
        background-color: #f0f0f0; /* Color de fondo de la pista */
    }

    /* Estilo del pulgar (el indicador que se arrastra) de la barra de desplazamiento en Chrome */
    ::-webkit-scrollbar-thumb {
        background-color: var(--black); /* Color del pulgar */
        height: 80px;
    }

    /* Estilo del pulgar cuando se pasa el mouse por encima en Chrome */
    ::-webkit-scrollbar-thumb:hover {
        background-color: #999; /* Color del pulgar al pasar el mouse por encima */
    }

    ::selection {
        background-color: var(--yellow); /* Cambia el color de fondo del texto seleccionado */
        color: var(--black); /* Cambia el color del texto seleccionado */
    }
`