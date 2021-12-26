import NavDrawer from './NavDrawer.index'
import { render, screen } from '@testing-library/react'

describe('<NavDrawer />', () => {
   it('should render the heading', () => {
      render(<NavDrawer />)

      expect(screen.getByRole('complementary')).toBeInTheDocument()
   })
})
