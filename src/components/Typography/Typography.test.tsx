import Typography from './Typography.index'
import { render, screen } from '@testing-library/react'

describe('<Typography />', () => {
   it('should render all headings with correct tags', () => {
      render(
         <>
            <Typography type={'heading-1'} color="light">
               heading1
            </Typography>
            <Typography type={'heading-2'} color="light">
               heading2
            </Typography>
            <Typography type={'heading-3'} color="light">
               heading3
            </Typography>
         </>
      )

      expect(
         screen.getByRole('heading', { name: /heading1/i })
      ).toMatchSnapshot()
      expect(
         screen.getByRole('heading', { name: /heading2/i })
      ).toMatchSnapshot()
      expect(
         screen.getByRole('heading', { name: /heading3/i })
      ).toMatchSnapshot()
   })
})
