import { Link } from 'components/IconLink/IconLink.styles'
import styled from 'styled-components'

export const Container = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 20vh;
   height: 70vh;

   gap: 35px;
   @media (min-width: 900px) {
      flex-direction: row-reverse;
      align-items: flex-start;
      justify-content: space-between;
   }
`

export const Content = styled.aside`
   flex: 1;
   & hr {
      border: none;
   }

   & p {
      margin-bottom: 27px;
   }

   @media (max-width: 900px) {
      & ${Link} {
         display: none;
      }
   }

   @media (min-width: 900px) {
      display: flex;
      flex-direction: column;
      max-width: 900px;

      & h1 {
         margin-bottom: 40px;
         text-align: left;
      }

      & p {
         margin-bottom: 47px;
         text-align: left;
      }
   }
`

export const ProfileImage = styled.div`
   flex: 0.7;

   overflow: hidden;
   border-radius: 50%;

   min-width: 170px;
   max-height: 170px;
   max-width: 300px;

   filter: ${({ theme }) =>
      `drop-shadow(-5px 7px 0px ${theme.background.secondary})`};

   & img {
      object-fit: cover;
      width: 100%;
   }
   @media (min-width: 900px) {
      max-height: none;
   }
`

export const LinksContainer = styled.div`
   color: ${({ theme }) => theme.text.dark};
   font-size: 32px;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 30px;

   @media (min-width: 900px) {
      justify-content: flex-start;
   }
`

export const Button = styled.button`
   color: ${({ theme }) => theme.text.light};
   border: none;
   padding: 10px 20px;
   border-radius: 2px;
   height: 47px;
   background: ${({ theme }) => theme.background.primary};

   font-size: 20px;
   font-weight: 500;
   line-height: 29px;
`
