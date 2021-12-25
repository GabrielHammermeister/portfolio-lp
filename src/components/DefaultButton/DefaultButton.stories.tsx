import DefaultButton from './DefaultButton.index'
import { Meta, Story } from '@storybook/react'

export default {
   title: 'DefaultButton',
   component: DefaultButton
} as Meta

export const Basic: Story = (args) => <DefaultButton {...args} />
