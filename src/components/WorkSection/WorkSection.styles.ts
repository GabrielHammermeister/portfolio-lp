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
export const WorkDescription = styled.aside`
   width: 100%;

   & h2 {
      margin-bottom: 1rem;
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
   max-width: 90%;

   margin: 0 auto;

   & .swiper {
      background-image: url('/img/BG.svg') !important;
      background-position: top left !important;
      background-repeat: no-repeat !important;
      background-size: 100px !important;
   }

   & .swiper-slide {
      padding: 20px 20px 0;

      background-position: top left !important;
      background-origin: content-box !important;
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
      right: 20px;

      background-color: ${({ theme }) => theme.background.secondary};
      background-image: url('/img/arrow-right.svg');
      background-size: 30%;
      background-position: center;
      background-repeat: no-repeat;
   }
   & .swiper-button-prev {
      height: 3.125rem;
      width: 3.75rem;
      left: 20px;
      background-color: ${({ theme }) => theme.background.secondary};

      background-image: url('/img/arrow-left.svg');
      background-size: 30%;
      background-position: center;
      background-repeat: no-repeat;
   }

   & .swiper-button-next::after,
   .swiper-button-prev::after {
      display: none;
   }

   @media (min-width: 500px) {
      max-height: 60%;
      max-width: 70%;

      & .swiper {
         background-size: 120px !important;
      }

      & .swiper-slide {
         padding: 40px 40px 0;
      }

      & .swiper-button-next {
         right: 40px;
      }

      & .swiper-button-prev {
         left: 40px;
      }
   }
   @media (min-width: 900px) {
      max-height: 100%;
      max-width: 45%;
      margin: none;

      & .swiper {
         background-size: 140px !important;
      }

      & .swiper-slide {
         background-position: top left !important;
      }
   }
`
