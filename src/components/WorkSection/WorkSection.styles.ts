import styled from 'styled-components'

export const Container = styled.main`
   height: 100vh;
   padding: 100px 0;

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
      gap: 55px;
   }
`
export const WorkBackground = styled.div`
   position: absolute;
   z-index: 1;
   height: 100%;
   width: 100%;

   background-position: top left !important;
   background-size: 100px !important;
   background-repeat: no-repeat !important;

   background: url('/img/BG.svg');

   @media (min-width: 500px) {
      background-size: 120px !important;
      padding-top: 80px;
   }
   @media (min-width: 900px) {
      background-size: 150px !important;
      padding-top: 80px;
   }
`
export const WorkDescription = styled.aside`
   width: 100%;

   & h2 {
      margin-bottom: 1.875rem;
   }

   & h3 {
      margin-bottom: 1.5rem;
   }

   & .swiper-pagination {
      bottom: 0;
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

   @media (min-width: 500px) {
      & .swiper-pagination-bullet {
         width: 80px;
      }
   }
   @media (min-width: 900px) {
      text-align: left;

      max-width: 50%;
      & .swiper-pagination-bullet {
         width: 100px;
      }

      & .swiper-pagination {
         width: auto;
      }
   }
`
export const WorkThumbnail = styled.aside`
   height: 100%;
   width: 100%;
   min-width: 50%;
   max-height: 55%;
   position: relative;
   & .swiper-slide {
      background-position: top 40px left !important;
      background-size: cover !important;
      background-repeat: no-repeat !important;
      clip-path: polygon(0% 0%, 100% 0%, 100% 95%, 0% 100%);

      display: flex;
      justify-content: center;
      align-items: center;
   }

   & .swiper-button-disabled {
      display: none;
   }

   & .swiper-button-next {
      height: 3.125rem;
      width: 3.75rem;
      right: 0;

      background-color: ${({ theme }) => theme.background.secondary};
      background-image: url('/img/arrow-right.svg');
      background-size: 30%;
      background-position: center;
      background-repeat: no-repeat;
   }
   & .swiper-button-prev {
      height: 3.125rem;
      width: 3.75rem;
      left: 0;
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

   @media (min-width: 500px) {
      max-height: 60%;

      & .swiper-slide {
         background-position: top 40px left;
         clip-path: polygon(0% 0%, 100% 0%, 100% 95%, 0% 100%);
      }
   }
   @media (min-width: 900px) {
      max-height: 100%;
      & .swiper-slide {
         background-position: top 40px left 40px !important;
      }
   }
`
