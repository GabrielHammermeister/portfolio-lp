import { motion, Variants } from 'framer-motion'
import * as S from './MenuToggle.styles'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Path = (props: any) => (
   <motion.path
      {...props}
      fill="transparent"
      strokeWidth="1.5"
      stroke="white"
      strokeLinecap="square"
   />
)

interface MenuToggleProps {
   handleOnClick: () => void
}

const buttonVariants: Variants = {
   open: {
      transition: { delay: 0.2, ease: 'easeOut', stiffness: 50 }
   },
   closed: {
      transition: { delay: 0.2, ease: 'easeOut', stiffness: 50 }
   }
}

const menuBackgroundVariants: Variants = {
   open: {
      transition: { ease: 'easeOut', staggerChildren: 0.2 },
      opacity: 1,
      height: '30rem',
      width: '22rem'
   },
   closed: {
      opacity: 0
   }
}

const itemVariants: Variants = {
   open: {
      opacity: 1,
      y: -10
   },
   closed: {
      opacity: 0,
      y: 0,
      display: 'none'
   }
}

const MenuToggle = ({ handleOnClick }: MenuToggleProps) => {
   return (
      <>
         <S.Button onClick={handleOnClick} variants={buttonVariants}>
            <svg width="23" height="23" viewBox="0 0 23 23">
               <Path
                  variants={{
                     closed: { d: 'M 2 2.5 L 20 2.5' },
                     open: { d: 'M 3 16.5 L 17 2.5', stroke: 'black' }
                  }}
               />
               <Path
                  d="M 2 9.423 L 20 9.423"
                  variants={{
                     closed: { opacity: 1 },
                     open: { opacity: 0, stroke: 'black' }
                  }}
                  transition={{ duration: 0.1 }}
               />
               <Path
                  variants={{
                     closed: { d: 'M 2 16.346 L 20 16.346' },
                     open: { d: 'M 3 2.5 L 17 16.346', stroke: 'black' }
                  }}
               />
            </svg>
         </S.Button>
         <S.MenuBackground variants={menuBackgroundVariants}>
            <S.MotionList>
               <a href="#About">
                  <S.MotionItem variants={itemVariants}>About me</S.MotionItem>
               </a>
               <a href="#Portifolio">
                  <S.MotionItem variants={itemVariants}>
                     Portifolio
                  </S.MotionItem>
               </a>
               <a href="#Email">
                  <S.MotionItem variants={itemVariants}>Mail me</S.MotionItem>
               </a>
            </S.MotionList>
         </S.MenuBackground>
      </>
   )
}

export default MenuToggle
