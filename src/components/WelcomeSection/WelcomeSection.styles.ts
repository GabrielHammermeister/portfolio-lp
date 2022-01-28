import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.section)`
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   height: 70vh;
   padding: 150px 20px 0;
   background-color: ${({ theme }) => theme.text.dark};

   ::before {
      content: '';
      position: absolute;
      top: -50px;
      left: -50px;
      width: 150px;
      height: 150px;
      background-image: url(/svg/blob1.svg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
   }

   h1 {
      margin-top: 50px;
      line-height: 100%;
   }

   h3 {
      font-size: 1.2rem;
      margin-bottom: 2.5rem;
   }

   @media (min-width: 768px) {
      flex-direction: row-reverse;
      padding: 150px 60px 0;
      h3 {
         font-size: 1.5rem;
         margin-bottom: 4.375rem;
      }
   }
`

export const Waves = styled.div`
   height: clamp(100px, 30vh, 300px);
   img {
      object-fit: cover;
      width: 100%;
   }
`

export const WelcomeMessageContainer = styled.aside`
   @media (min-width: 768px) {
      text-align: left;
   }
`

export const LinksContainer = styled.div`
   color: ${({ theme }) => theme.text.light};
   font-size: 32px;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1.5rem;

   @media (min-width: 768px) {
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
