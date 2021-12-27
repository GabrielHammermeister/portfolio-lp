import Footer from './Footer.index'
import { Meta, Story } from '@storybook/react'

export default {
   title: 'Footer',
   component: Footer
} as Meta

export const Basic: Story = (args) => <Footer {...args} />
