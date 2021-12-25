import { render } from '@testing-library/react'
import Hamburger from './Hamburger.index'

describe('<Hamburger />', () => {
   it('should render the heading', () => {
      const layout = render(<Hamburger />)

      expect(layout).toMatchSnapshot()
   })
})
