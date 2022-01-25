/* eslint-disable @typescript-eslint/no-unused-vars */
import Typography from 'components/Typography/Typography.index'
import { useCycle } from 'framer-motion'
import Link from 'next/link'
import * as S from './NavBar.styles'

// const sidebarVariants = {
//    open: (height = 1000) => ({
//       clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//       transition: {
//          type: 'spring',
//          stiffness: 20,
//          restDelta: 2
//       }
//    }),
//    closed: {
//       clipPath: 'circle(30px at 40px 40px)',
//       transition: {
//          delay: 0.5,
//          type: 'spring',
//          stiffness: 400,
//          damping: 40
//       }
//    }
// }

const NavBar = () => {
   const [isOpen, toggleOpen] = useCycle(false, true)
   // const containerRef = useRef(null)
   return (
      <S.Header initial={false} animate={isOpen ? 'open' : 'closed'}>
         <S.LinkList>
            <Link href={'/'} passHref>
               <S.Link>
                  <Typography type="text-button" color="light">
                     Home
                  </Typography>
               </S.Link>
            </Link>

            <Link href={'#works'} passHref>
               <S.Link>
                  <Typography type="text-button" color="light">
                     Works
                  </Typography>
               </S.Link>
            </Link>
         </S.LinkList>
         {/* <NavDrawer /> */}
         {/* <Hamburger handleOnClick={() => toggleOpen()} /> */}
      </S.Header>
   )
}

export default NavBar
