import SkillChip from './SkillChip.index'
import { render, screen } from '@testing-library/react'

describe('<SkillChip />', () => {
   it('should render the heading', () => {
      render(<SkillChip />)

      expect(
         screen.getByRole('heading', { name: /SkillChip/i })
      ).toBeInTheDocument()
   })
})
