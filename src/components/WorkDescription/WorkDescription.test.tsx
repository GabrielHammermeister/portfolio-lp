import WorkDescription from './WorkDescription.index'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { colorTheme } from 'themes/colorTheme'

describe('<WorkDescription />', () => {
   it('should render the heading', () => {
      render(
         <ThemeProvider theme={colorTheme}>
            <WorkDescription />
         </ThemeProvider>
      )

      expect(screen.getByRole('main')).toBeInTheDocument()
   })
})
