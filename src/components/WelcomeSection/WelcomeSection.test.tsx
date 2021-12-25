import { render } from '@testing-library/react'
import WelcomeSection from './WelcomeSection.index'

describe('<WelcomeSection />', () => {
   it('should render the heading', () => {
      const layout = render(<WelcomeSection />)

      expect(layout).toMatchSnapshot()
   })
})
