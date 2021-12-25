import { render } from '@testing-library/react'
import DefaultButton from './DefaultButton.index'

describe('<DefaultButton />', () => {
   it('should render the heading', () => {
      const layout = render(<DefaultButton />)

      expect(layout).toMatchSnapshot()
   })
})
