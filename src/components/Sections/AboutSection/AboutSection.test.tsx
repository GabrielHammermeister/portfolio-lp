import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { colorTheme } from 'themes/colorTheme'
import { AboutSection } from './AboutSection.index'

describe('<AboutSection />', () => {
   it('should render the heading', () => {
      const container = render(
         <ThemeProvider theme={colorTheme}>
            <AboutSection />
         </ThemeProvider>
      )

      expect(container).toMatchSnapshot()
   })
})
