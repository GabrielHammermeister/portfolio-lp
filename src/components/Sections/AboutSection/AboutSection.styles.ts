import { Link } from 'components/IconLink/IconLink.styles'
import styled from 'styled-components'

export const Container = styled.main`
   z-index: 2;
   color: white;
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 100vh;
   margin-bottom: 20vh;
   padding: 0 50px;
   gap: 55px;

   @media (min-width: 900px) {
      flex-direction: row-reverse;
      align-items: flex-start;
      justify-content: space-between;
   }

   @media (min-width: 500px) {
      padding: 0 100px;
   }
   @media (min-width: 900px) {
      padding: 0 150px;
   }
`
export const Illustration = styled.img`
   width: clamp(300px, 50%, 800px);
   padding-top: 6rem;
`

export const Content = styled.aside`
   flex: 1;
   text-align: center;
   & h2 {
      margin-bottom: 1.4rem;
   }

   & p {
      margin-bottom: 3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      line-clamp: 4;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
   }

   @media (max-width: 900px) {
      & ${Link} {
         display: none;
      }
   }

   @media (min-width: 900px) {
      text-align: left;
      padding-top: 6.25rem;
      display: flex;
      flex-direction: column;
      max-width: 900px;
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
   background: ${({ theme }) => theme.text.primary};

   font-size: 20px;
   font-weight: 500;
   line-height: 29px;
`
