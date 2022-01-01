import WorkDescription from './WorkDescription.index'
import { render, screen } from '@testing-library/react'

describe('<WorkDescription />', () => {
   it('should render the heading', () => {
      render(<WorkDescription />)

      expect(
         screen.getByRole('heading', { name: /WorkDescription/i })
      ).toBeInTheDocument()
   })
})
