import NavBar from './NavBar.index'
import { render, screen } from '@testing-library/react'

describe('<NavBar />', () => {
   it('should render the heading', () => {
      render(<NavBar />)

      expect(
         screen.getByRole('heading', { name: /NavBar/i })
      ).toBeInTheDocument()
   })
})
