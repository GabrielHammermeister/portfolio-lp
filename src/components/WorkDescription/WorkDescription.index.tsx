import SkillChip from 'components/SkillChip/SkillChip.index'
import Typography from 'components/Typography/Typography.index'
import * as S from './WorkDescription.styles'

const WorkDescription = () => (
   <S.Container>
      <Typography type="heading-2" color="primary">
         Works
      </Typography>
      <Typography type="heading-3" color="primary">
         Simon Game
      </Typography>
      <Typography type="body" color="dark">
         An inquisitive Computer Science Engineering student, skilled in
         leadership, seeking to leverage solid development skills with focus on
         collaboration, communication and passion.
      </Typography>
      <S.SkillContainer>
         <SkillChip>HTML</SkillChip>
         <SkillChip>CSS</SkillChip>
         <SkillChip>JavaScript</SkillChip>
      </S.SkillContainer>
   </S.Container>
)

export default WorkDescription
