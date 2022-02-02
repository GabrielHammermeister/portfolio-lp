import MenuToggle from './MenuToggle.index'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { colorTheme } from 'themes/colorTheme'

describe('<MenuToggle />', () => {
   it('should render the heading', () => {
      render(
         <ThemeProvider theme={colorTheme}>
            <MenuToggle handleOnClick={() => null} />
         </ThemeProvider>
      )

      expect(screen.getByRole('button')).toBeInTheDocument()
   })
})
