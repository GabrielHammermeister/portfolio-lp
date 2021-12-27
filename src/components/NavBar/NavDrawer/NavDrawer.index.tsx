import { Variants } from 'framer-motion'
import Link from 'next/link'
import * as S from './NavDrawer.styles'

const navDrawerVariants: Variants = {
   open: {
      x: 300,
      zIndex: 2,
      opacity: 1,
      transition: {
         delay: 0.2,
         ease: 'easeOut',
         damping: 80
      }
   },
   closed: {
      x: 0,
      opacity: 0.8,
      zIndex: 1,
      transition: {
         delay: 0.2,
         ease: 'easeOut',
         damping: 100
      }
   }
}

const NavDrawer = () => {
   return (
      <S.Container variants={navDrawerVariants}>
         <S.LinkList>
            <Link href={'/'} passHref>
               <a>Home</a>
            </Link>
            <Link href={'works'} passHref>
               <a>Works</a>
            </Link>
         </S.LinkList>

         <S.ContactContainer>
            <hr />
            <a>Contact</a>
         </S.ContactContainer>
      </S.Container>
   )
}

export default NavDrawer
