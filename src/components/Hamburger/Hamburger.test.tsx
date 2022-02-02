/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react'
import Hamburger from './Hamburger.index'

describe('<Hamburger />', () => {
   it('should render the heading', () => {
      const layout = render(<Hamburger handleOnClick={() => {}} />)

      expect(layout).toMatchSnapshot()
   })
})
