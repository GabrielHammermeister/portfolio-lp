import Typography from './Typography.index'
import { render, screen } from '@testing-library/react'

describe('<Typography />', () => {
   it('should render the heading', () => {
      render(<Typography type={'heading-1'}>heading</Typography>)

      expect(
         screen.getByRole('heading', { name: /heading/i })
      ).toBeInTheDocument()
   })
})
