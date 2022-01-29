import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Button = styled(motion.button)`
   position: absolute;
   right: 1rem;
   top: 1rem;
   outline: none;
   border: none;
   cursor: pointer;
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background: transparent;

   @media (min-width: 768px) {
      right: 3rem;
      top: 2rem;
      & svg {
         width: 2.5rem;
         height: 2.5rem;
      }
   }
`
