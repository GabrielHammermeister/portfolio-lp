/* eslint-disable @next/next/no-img-element */
import Hamburger from 'components/Hamburger/Hamburger.index'
import IconLink from 'components/IconLink/IconLink.index'
import ProfileImage from 'components/ProfileImage/ProfileImage.index'
import Typography from 'components/Typography/Typography.index'
import { useCycle } from 'framer-motion'
import {
   AiFillGithub,
   AiFillInstagram,
   AiFillLinkedin,
   AiFillTwitterCircle
} from 'react-icons/ai'
import * as S from './WelcomeSection.styles'

const WelcomeSection = () => {
   const [isOpen, toggleOpen] = useCycle(false, true)

   return (
      <>
         <S.Container animate={isOpen ? 'open' : 'closed'}>
            <Hamburger handleOnClick={() => toggleOpen()} />
            <ProfileImage />

            <Typography color="light" type="main-title">
               HAMMER
            </Typography>
            <Typography color="light" type="heading-3">
               Engineer + Junior Front-end Developer
            </Typography>

            <S.LinksContainer>
               <IconLink href={'https://github.com/GabrielHammermeister'}>
                  <AiFillGithub />
               </IconLink>
               <IconLink href={'https://www.linkedin.com/in/gabriel-hammer/'}>
                  <AiFillLinkedin />
               </IconLink>
               <IconLink href={'https://www.instagram.com/ga.hmc/'}>
                  <AiFillInstagram />
               </IconLink>
               <IconLink href={'https://twitter.com/Dev_GaHammer/'}>
                  <AiFillTwitterCircle />
               </IconLink>
            </S.LinksContainer>
         </S.Container>
         <S.Waves>
            <picture>
               <source
                  media="(max-width: 768px)"
                  srcSet="/backgrounds/waves100px.svg"
               />
               <source
                  media="(min-width: 768px)"
                  srcSet="/backgrounds/waves150px.svg"
               />
               <img
                  src="/backgrounds/waves150px.svg"
                  alt="Two waves of different tons of blue"
               />
            </picture>
         </S.Waves>
      </>
   )
}

export default WelcomeSection
