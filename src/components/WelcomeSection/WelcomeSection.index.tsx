import DefaultButton from 'components/DefaultButton/DefaultButton.index'
import IconLink from 'components/IconLink/IconLink.index'
import Typography from 'components/Typography/Typography.index'
import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import * as S from './WelcomeSection.styles'

const WelcomeSection = () => (
   <>
      <S.Container>
         <S.ProfileImage>
            <Image
               src="/img/profile.jpg"
               alt="Imagem do autor do site"
               height="100%"
               width="100%"
               layout="responsive"
               objectPosition="top"
            />
         </S.ProfileImage>
         <S.Content>
            <Typography type="heading-1">
               Hi, I’m Gabriel
               <hr />A Web Developer
            </Typography>
            <Typography type="body">
               Amet minim mollit non deserunt ullamco est sit aliqua dolor do
               amet sint. Velit officia consequat duis enim velit mollit.
               Exercitation veniam consequat sunt nostrud amet.
            </Typography>
            <S.LinksContainer>
               <DefaultButton />
               <IconLink href={'https://github.com/GabrielHammermeister'}>
                  <AiFillGithub />
               </IconLink>
               <IconLink href={'https://www.linkedin.com/in/gabriel-hammer/'}>
                  <AiFillLinkedin />
               </IconLink>
            </S.LinksContainer>
         </S.Content>
      </S.Container>
   </>
)

export default WelcomeSection
