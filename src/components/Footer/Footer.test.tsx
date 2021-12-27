import Footer from './Footer.index'
import { render, screen } from '@testing-library/react'

describe('<Footer />', () => {
   it('should render the heading', () => {
      render(<Footer />)

      expect(screen.getByRole('contentinfo')).toBeInTheDocument()
   })
})
