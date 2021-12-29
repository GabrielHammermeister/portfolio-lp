import WorkSection from './WorkSection.index'
import { render, screen } from '@testing-library/react'

describe('<WorkSection />', () => {
   it('should render the heading', () => {
      render(<WorkSection />)

      expect(
         screen.getByRole('heading', { name: /WorkSection/i })
      ).toBeInTheDocument()
   })
})
