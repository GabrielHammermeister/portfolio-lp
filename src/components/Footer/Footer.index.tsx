import IconLink from 'components/IconLink/IconLink.index'
import * as S from './Footer.styles'
import {
   AiFillCopyrightCircle,
   AiFillGithub,
   AiFillInstagram,
   AiFillLinkedin
} from 'react-icons/ai'

const Footer = () => (
   <S.FooterContainer>
      <S.InstagramName>@ga.hmc</S.InstagramName>

      <S.IconList>
         <IconLink href={'https://github.com/GabrielHammermeister'}>
            <AiFillGithub />
         </IconLink>
         <IconLink href={'https://www.linkedin.com/in/gabriel-hammer/'}>
            <AiFillLinkedin />
         </IconLink>
         <IconLink href={'https://www.instagram.com/ga.hmc/'}>
            <AiFillInstagram />
         </IconLink>
      </S.IconList>

      <S.Copyright>
         All Rights Reserved <AiFillCopyrightCircle /> 2022
      </S.Copyright>
   </S.FooterContainer>
)

export default Footer
