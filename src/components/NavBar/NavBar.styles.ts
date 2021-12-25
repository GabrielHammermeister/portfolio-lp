import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Header = styled(motion.nav)`
   position: relative;
   height: 50px;
   display: flex;
   justify-content: flex-end;
   margin: 15px 10px 10px;
   margin-bottom: 35px;

   @media (min-width: 768px) {
      margin-bottom: 140px;
   }
`

export const Background = styled(motion.div)`
   position: absolute;
   top: 0;
   left: 0;
   bottom: 0;
   width: 300px;
   background: #99c3cf;
`
