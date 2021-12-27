import IconLink from './IconLink.index'
import { render, screen } from '@testing-library/react'

describe('<IconLink />', () => {
   it('should render the heading', () => {
      render(<IconLink href={'/'} />)

      expect(screen.getByRole('link')).toBeInTheDocument()
   })
})
