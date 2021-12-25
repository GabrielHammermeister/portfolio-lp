import WelcomeSection from './WelcomeSection.index'
import { Meta, Story } from '@storybook/react'

export default {
   title: 'WelcomeSection',
   component: WelcomeSection
} as Meta

export const Basic: Story = (args) => <WelcomeSection {...args} />
