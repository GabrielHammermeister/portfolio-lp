import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { colorTheme } from 'themes/colorTheme'
import WelcomeSection from './WelcomeSection.index'

describe('<WelcomeSection />', () => {
   it('should render the heading', () => {
      const layout = render(
         <ThemeProvider theme={colorTheme}>
            <WelcomeSection />
         </ThemeProvider>
      )

      expect(layout).toMatchSnapshot()
   })
})
