import Typography from './Typography.index'
import { Meta, Story } from '@storybook/react'

export default {
   title: 'Typography',
   component: Typography
} as Meta

export const Basic: Story = (args) => <Typography {...args} />
