import styled from 'styled-components'

export const Container = styled.div`
   position: relative;
   border: 1px solid ${({ theme }) => theme.text.light};
   width: 150px;
   height: 200px;
   margin: 0 auto;

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
      z-index: 2;

      object-fit: cover;
      object-position: center;

      max-width: 150px;
      margin-left: -30px;
      margin-top: -15px;
      height: 100%;
      width: 100%;
   }
`
