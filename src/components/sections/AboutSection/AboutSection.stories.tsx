import AboutSection from './AboutSection.index'
import { Meta, Story } from '@storybook/react'

export default {
   title: 'AboutSection',
   component: AboutSection
} as Meta

export const Basic: Story = (args) => <AboutSection {...args} />
