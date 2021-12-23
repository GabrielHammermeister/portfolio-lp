import MenuToggle from './MenuToggle.index'
import { Meta, Story } from '@storybook/react'

export default {
   title: 'MenuToggle',
   component: MenuToggle
} as Meta

export const Basic: Story = (args) => <MenuToggle {...args} />
