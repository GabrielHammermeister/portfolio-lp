import IconLink from 'components/IconLink/IconLink.index'
import * as S from './Footer.styles'
import {
   AiFillCopyrightCircle,
   AiFillGithub,
   AiFillInstagram,
   AiFillLinkedin
} from 'react-icons/ai'
import Typography from 'components/Typography/Typography.index'

const Footer = () => (
   <S.FooterContainer>
      <Typography type="heading-3" color="light">
         @ga.hmc
      </Typography>

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

      <Typography type="chip" color="light">
         All Rights Reserved <AiFillCopyrightCircle /> 2022
      </Typography>
   </S.FooterContainer>
)

export default Footer
