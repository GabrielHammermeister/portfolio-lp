import Hamburger from './Hamburger.index'
import { Meta, Story } from '@storybook/react'

export default {
   title: 'Hamburger',
   component: Hamburger
} as Meta

export const Basic: Story = (args) => <Hamburger {...args} />
