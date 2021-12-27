import IconLink from './IconLink.index'
import { Meta, Story } from '@storybook/react'

export default {
   title: 'IconLink',
   component: IconLink
} as Meta

export const Basic: Story = (args) => <IconLink {...args} />
