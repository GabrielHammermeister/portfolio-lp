import AboutSection from './AboutSection.index'
import { render, screen } from '@testing-library/react'

describe('<AboutSection />', () => {
   it('should render the heading', () => {
      render(<AboutSection />)

      expect(screen.getByRole('main')).toBeInTheDocument()
   })
})
