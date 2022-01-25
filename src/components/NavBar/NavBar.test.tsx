import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { colorTheme } from 'themes/colorTheme'
import NavBar from './NavBar.index'

describe('<NavBar />', () => {
   it('should render the heading', () => {
      render(
         <ThemeProvider theme={colorTheme}>
            <NavBar />
         </ThemeProvider>
      )

      expect(screen.getByRole('navigation')).toBeInTheDocument()
   })
})
