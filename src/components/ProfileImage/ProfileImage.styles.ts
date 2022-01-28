import styled from 'styled-components'

export const Container = styled.aside`
   position: relative;
   border: 1px solid ${({ theme }) => theme.text.light};
   width: 16rem;
   align-self: center;
   justify-self: flex-start;
   height: 22rem;

   & ::before {
      content: '';
      z-index: 1;
      position: absolute;
      top: -40px;
      left: -40px;
      width: 60px;
      height: 60px;
      background-image: url('/svg/dots.svg');
      background-size: cover;
      background-position: center;
   }

   & img {
      position: relative;
      display: block;

      z-index: 2;

      object-fit: cover;
      object-position: center;

      margin-left: -15px;
      margin-top: -15px;

      height: inherit;
      width: inherit;
   }

   @media (min-width: 768px) {
      align-self: flex-start;

      & img {
         margin-left: -30px;
         margin-top: -30px;
      }

      ::before {
         top: -5rem;
         left: -5rem;
         width: 7.5rem;
         height: 7.5rem;
      }
   }
`
