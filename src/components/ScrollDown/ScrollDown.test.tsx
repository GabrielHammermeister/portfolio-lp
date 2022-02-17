import ScrollDown from './ScrollDown.index'
import { render, screen } from '@testing-library/react'

describe('<ScrollDown />', () => {
   it('should render ScrollDown', () => {
      const container = render(<ScrollDown />)

      expect(container).toMatchSnapshot()
   })
})
