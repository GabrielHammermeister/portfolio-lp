import NavBar from './NavBar.index'
import { Meta, Story } from '@storybook/react'

export default {
   title: 'NavBar',
   component: NavBar
} as Meta

export const Basic: Story = (args) => <NavBar {...args} />
