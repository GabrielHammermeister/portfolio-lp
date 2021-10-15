import DefaultButton from 'components/DefaultButton/DefaultButton.index'
import Hamburger from 'components/Hamburger/Hamburger.index'
import * as S from './WelcomeSection.styles'
import Image from 'next/image'

const WelcomeSection = () => (
   <>
      <S.Navbar>
         <Hamburger />
      </S.Navbar>

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
         <h1>Hi, I am Gabriel, a Software Developer</h1>
         <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
         </p>

         <DefaultButton />
      </S.Container>
   </>
)

export default WelcomeSection
