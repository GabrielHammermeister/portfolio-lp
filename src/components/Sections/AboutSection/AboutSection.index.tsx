import IconLink from 'components/IconLink/IconLink.index'
import Typography from 'components/Typography/Typography.index'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import * as S from './AboutSection.styles'

export const AboutSection = () => {
   return (
      <>
         <S.Container id="About">
            <S.Illustration src="/illustrations/blogging.svg" />
            <S.Content>
               <Typography type="heading-2" color="primary">
                  About Me
               </Typography>
               <Typography type="body" color="dark">
                  An inquisitive Computer Science Engineering student, skilled
                  in leadership, seeking to leverage solid development skills
                  with focus on collaboration, communication and passion.
               </Typography>
               <S.LinksContainer>
                  <S.Button>
                     <Typography type="button" color="light">
                        Download CV
                     </Typography>
                  </S.Button>
                  <IconLink href={'https://github.com/GabrielHammermeister'}>
                     <AiFillGithub />
                  </IconLink>
                  <IconLink
                     href={'https://www.linkedin.com/in/gabriel-hammer/'}
                  >
                     <AiFillLinkedin />
                  </IconLink>
               </S.LinksContainer>
            </S.Content>
         </S.Container>
      </>
   )
}
