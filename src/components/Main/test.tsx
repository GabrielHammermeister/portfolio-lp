import Main from '.'
import { render, screen } from '@testing-library/react'

describe('<Main />', () => {
   it('should render the heading', () => {
      const { container } = render(<Main />)

      expect(
         screen.getByRole('heading', { name: /react avançado/i })
      ).toBeInTheDocument()

      expect(container.firstChild).toMatchSnapshot()
   })
})
