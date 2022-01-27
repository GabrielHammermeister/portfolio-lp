import ProfileImage from './ProfileImage.index'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { colorTheme } from 'themes/colorTheme'

describe('<ProfileImage />', () => {
   it('should render the profile picture', () => {
      render(
         <ThemeProvider theme={colorTheme}>
            <ProfileImage />
         </ThemeProvider>
      )

      expect(screen.getByRole('img')).toBeInTheDocument()
   })
})
