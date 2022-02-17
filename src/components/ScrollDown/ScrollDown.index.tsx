import Typography from 'components/Typography/Typography.index'
import { AiOutlineDownCircle } from 'react-icons/ai'
import * as S from './ScrollDown.styles'

const ScrollDown = () => (
   <S.Wrapper>
      <S.MotionContainer
         animate={{ y: [-2, 0, -2] }}
         transition={{ repeat: Infinity, duration: 1 }}
      >
         <AiOutlineDownCircle />
      </S.MotionContainer>

      <Typography color="dark" type="label">
         Scroll
      </Typography>
   </S.Wrapper>
)

export default ScrollDown
