import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { colorTheme } from 'themes/colorTheme'
import WorkSection from './WorkSection.index'

describe('<WorkSection />', () => {
   it('should render the heading', () => {
      const container = render(
         <ThemeProvider theme={colorTheme}>
            <WorkSection />
         </ThemeProvider>
      )

      expect(container).toMatchSnapshot()
   })
})
