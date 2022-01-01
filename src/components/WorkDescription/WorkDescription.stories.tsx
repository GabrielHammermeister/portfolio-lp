import WorkDescription from './WorkDescription.index'
import { Meta, Story } from '@storybook/react'

export default {
   title: 'WorkDescription',
   component: WorkDescription
} as Meta

export const Basic: Story = (args) => <WorkDescription {...args} />
