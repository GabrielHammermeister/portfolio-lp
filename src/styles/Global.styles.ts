import styled, { createGlobalStyle } from 'styled-components'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const GlobalStyles = createGlobalStyle`

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      font-family: 'Spartan', OpenSans;
   }

   html, body, #__next {
      height: 100%;
   }

   html {
      font-size: 62.5%;
   }

   body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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

export const Layout = styled.main``
