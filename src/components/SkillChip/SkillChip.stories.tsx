import SkillChip from './SkillChip.index'
import { Meta, Story } from '@storybook/react'

export default {
   title: 'SkillChip',
   component: SkillChip
} as Meta

export const Basic: Story = (args) => <SkillChip {...args} />
