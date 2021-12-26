import { render, screen } from '@testing-library/react'
import NavBar from './NavBar.index'

describe('<NavBar />', () => {
   it('should render the heading', () => {
      render(<NavBar />)

      expect(screen.getByRole('navigation')).toBeInTheDocument()
   })
})
