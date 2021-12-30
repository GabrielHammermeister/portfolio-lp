import styled from 'styled-components'

export const Container = styled.main`
   height: 100vh;
   padding: 100px 0;

   display: flex;
   gap: 55px;

   & .swiper {
      height: 100%;
      width: 100%;
   }
`

export const WorkThumbnail = styled.aside`
   height: 100%;
   width: 100%;
   min-width: 400px;

   & .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
   }

   & .swiper-button-disabled {
      display: none;
   }

   & .swiper-button-next {
      height: 50px;
      width: 60px;

      background-color: ${({ theme }) => theme.background.secondary};
      background-image: url('/img/arrow-right.svg');
      background-size: 30%;
      background-position: center;
      background-repeat: no-repeat;
   }
   & .swiper-button-prev {
      height: 50px;
      width: 60px;
      background-color: ${({ theme }) => theme.background.secondary};

      background-image: url('/img/arrow-left.svg');
      background-size: 30%;
      background-position: center;
      background-repeat: no-repeat;
   }

   & .swiper-button-next::after {
      display: none;
   }
   & .swiper-button-prev::after {
      display: none;
   }

   & .swiper-pagination-bullet {
      background-color: ${({ theme }) => theme.background.secondary};

      border-radius: 0;
      width: 70px;
      height: 5px;
   }

   & .swiper-pagination-bullet-active {
      height: 6px;
   }
`

export const WorkDescription = styled.aside`
   text-align: left;

   & h2 {
      margin-bottom: 30px;
   }

   & h3 {
      margin-bottom: 24px;
   }
`
