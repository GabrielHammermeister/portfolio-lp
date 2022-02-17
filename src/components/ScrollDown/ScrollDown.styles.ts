import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled.div`
   display: flex;
   gap: 7px;
   align-items: center;

   margin-left: 8rem;
   svg {
      height: 1.5rem;
      width: 1.5rem;
   }
`

export const MotionContainer = styled(motion.div)``
