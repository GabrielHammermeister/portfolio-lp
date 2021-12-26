import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.aside)`
   width: 300px;
   height: 500px;
   position: absolute;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   top: -15px;
   left: -315px;

   padding: 100px 30px 20px;

   background-color: white;
`
export const LinkList = styled.ul`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   font-size: 1.5rem;
   font-weight: 700;

   list-style: none;
   gap: 20px;
`

export const ContactContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;

   & hr {
      margin-bottom: 20px;
      width: 100%;
   }
   font-size: 1.5rem;
   font-weight: 700;
`
