import SkillChip from './SkillChip.index'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { colorTheme } from 'themes/colorTheme'

describe('<SkillChip />', () => {
   it('should render the heading', () => {
      render(
         <ThemeProvider theme={colorTheme}>
            <SkillChip>test</SkillChip>
         </ThemeProvider>
      )

      expect(screen.getByText(/test/i)).toBeInTheDocument()
   })
})
