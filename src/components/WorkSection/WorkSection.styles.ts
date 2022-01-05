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
export const WorkBackground = styled.div`
   position: absolute;
   z-index: 1;
   height: 100%;
   width: 100%;

   background-position: top left !important;
   background-size: 150px !important;
   background-repeat: no-repeat !important;

   background: url('/img/BG.svg');
`
export const WorkDescription = styled.aside`
   max-width: 50%;
   width: 100%;
   text-align: left;

   & h2 {
      margin-bottom: 1.875rem;
   }

   & h3 {
      margin-bottom: 1.5rem;
   }

   & .swiper-pagination {
      width: auto;
      bottom: 70px;
   }

   & .swiper-pagination-bullet {
      background-color: ${({ theme }) => theme.background.secondary};

      border-radius: 0;
      width: 100px;
      height: 5px;
   }

   & .swiper-pagination-bullet-active {
      height: 6px;
   }
`

export const WorkThumbnail = styled.aside`
   height: 100%;
   width: 100%;
   min-width: 40%;
   position: relative;
   & .swiper-slide {
      background-position: top 40px left 40px, top left !important;
      background-size: cover, 150px !important;
      background-repeat: no-repeat !important;
      clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);

      display: flex;
      justify-content: center;
      align-items: center;
   }

   & .swiper-pagination {
      /* display: none; */
   }

   & .swiper-button-disabled {
      display: none;
   }

   & .swiper-button-next {
      height: 3.125rem;
      width: 3.75rem;
      right: 0 !important;

      background-color: ${({ theme }) => theme.background.secondary};
      background-image: url('/img/arrow-right.svg');
      background-size: 30%;
      background-position: center;
      background-repeat: no-repeat;
   }
   & .swiper-button-prev {
      height: 3.125rem;
      width: 3.75rem;
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
`
