import NavDrawer from './NavDrawer.index'
import { Meta, Story } from '@storybook/react'

export default {
   title: 'NavDrawer',
   component: NavDrawer
} as Meta

export const Basic: Story = (args) => <NavDrawer {...args} />
