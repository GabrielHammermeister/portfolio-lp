import styled from 'styled-components'

export const Container = styled.main`
   height: 100vh;
   padding: 50px 0 100px;
   margin-bottom: 20vh;

   display: flex;
   flex-direction: column;
   justify-content: space-between;

   & .swiper {
      height: 100%;
      width: 100%;
   }
   @media (min-width: 900px) {
      flex-direction: row;
      justify-content: flex-start;
      padding: 0 205px 0 150px;

      gap: 55px;
   }
`

export const CarouselContainer = styled.section`
   height: 300px;
   width: 100%;
   background-color: ${({ theme }) => theme.text.dark};
`
