/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { colorTheme } from 'themes/colorTheme'
import Hamburger from './Hamburger.index'

describe('<Hamburger />', () => {
   it('should render the heading', () => {
      const layout = render(
         <ThemeProvider theme={colorTheme}>
            <Hamburger handleOnClick={() => {}} />
         </ThemeProvider>
      )

      expect(layout).toMatchSnapshot()
   })
})
