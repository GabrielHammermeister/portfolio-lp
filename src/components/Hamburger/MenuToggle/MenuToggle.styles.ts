import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Button = styled(motion.button)`
   position: absolute;
   right: 1rem;
   top: 1rem;
   z-index: 11;
   outline: none;
   border: none;
   cursor: pointer;
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background: transparent;

   @media (min-width: 768px) {
      right: 5rem;
      top: 2rem;
      & svg {
         width: 2rem;
         height: 2rem;
      }
   }
`
export const MotionList = styled(motion.ul)`
   text-align: left;
   display: flex;
   flex-direction: column;
   list-style: none;
   gap: 30px;
   margin-left: 50px;
   a {
      text-decoration: none;
   }
`
export const MotionItem = styled(motion.li)`
   color: inherit;
`

export const MenuBackground = styled(motion.div)`
   background-color: ${({ theme }) => theme.background.light};
   position: absolute;
   z-index: 10;
   right: 0.5rem;
   top: 0.5rem;
   height: 100px;
   width: 100px;

   display: flex;
   align-items: center;
   @media (min-width: 768px) {
      right: 4rem;
      top: 1rem;
   }
`
