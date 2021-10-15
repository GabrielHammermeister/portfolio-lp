import * as S from './styles'

const Main = ({
   title = 'React Avançado',
   description = 'TypeScript, ReactJS, NextJS, e Styled Components'
}) => (
   <>
      <S.Container>
         <S.Logo
            src="/img/logo-label.svg"
            alt="Imagem de um atomo com React Avancado escrito ao lado."
         />
         <S.Title>{title}</S.Title>

         <S.Description>{description}</S.Description>

         <S.Illustration
            src="/img/Illustration.svg"
            alt="Homem sentado, de costas, olhando para codigos."
         />
      </S.Container>
   </>
)

export default Main
