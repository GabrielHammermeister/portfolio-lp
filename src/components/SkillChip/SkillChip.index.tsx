import Typography from 'components/Typography/Typography.index'
import { ReactNode } from 'react'
import * as S from './SkillChip.styles'

type Props = {
   children: ReactNode
}

const SkillChip = ({ children }: Props) => (
   <S.Wrapper>
      <Typography type="chip" color="light">
         {children}
      </Typography>
   </S.Wrapper>
)

export default SkillChip
