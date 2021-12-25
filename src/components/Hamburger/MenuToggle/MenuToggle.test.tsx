import MenuToggle from './MenuToggle.index'
import { render, screen } from '@testing-library/react'

describe('<MenuToggle />', () => {
   it('should render the heading', () => {
      render(<MenuToggle />)

      expect(
         screen.getByRole('heading', { name: /MenuToggle/i })
      ).toBeInTheDocument()
   })
})
