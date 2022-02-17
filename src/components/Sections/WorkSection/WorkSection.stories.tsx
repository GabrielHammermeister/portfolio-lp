import WorkSection from './WorkSection.index'
import { Meta, Story } from '@storybook/react'

export default {
   title: 'WorkSection',
   component: WorkSection
} as Meta

export const Basic: Story = (args) => <WorkSection {...args} />
