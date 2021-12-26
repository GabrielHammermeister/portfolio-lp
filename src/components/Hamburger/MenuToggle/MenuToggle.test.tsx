import MenuToggle from './MenuToggle.index'
import { render, screen } from '@testing-library/react'

describe('<MenuToggle />', () => {
   it('should render the heading', () => {
      render(<MenuToggle handleOnClick={() => null} />)

      expect(screen.getByRole('button')).toBeInTheDocument()
   })
})
