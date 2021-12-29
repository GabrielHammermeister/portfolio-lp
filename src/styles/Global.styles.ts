import styled, { createGlobalStyle } from 'styled-components'
import Spartan from '../fonts/Spartan-VariableFont_wght.ttf'

export const GlobalStyles = createGlobalStyle`

   @font-face {
      font-family: 'Spartan';
      src: local('../fonts/Spartan-VariableFont_wght.ttf'), url(${Spartan}) format('truetype');
      font-weight: 700;
      font-style: normal;
   }

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      font-family: 'Spartan'
   }

   html, body, #__next {
      height: 100%;
   }

   html {
      font-size: 62.5%;
   }

   body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
   }

   p {
      font-size: 1.5rem;
      line-height: 2rem;
   }

   h1 {
      font-size: 3rem;
      line-height: 3.5rem;
   }

   @media(min-width: 360px) {
      html {
         font-size: 75%;
      }
   }
   @media(min-width: 768px) {
      html {
         font-size: 85%;
      }
   }
   @media(min-width: 1025px) {
      html {
         font-size: 100%;
      }
   }
`

export const Layout = styled.main`
   padding: 0 15px;

   @media (min-width: 500px) {
      padding: 0 50px;
   }
   @media (min-width: 900px) {
      padding: 0 100px;
   }
   @media (min-width: 1280px) {
      padding: 0 250px;
   }
`
