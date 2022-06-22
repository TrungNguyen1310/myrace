import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Badge from '../Badge'
export default {
  title: 'Components/Badge',
  component: Badge,
  args: {
    badgeContent: '20'
  },
  argTypes: {
    primary: { control: 'boolean' },
    max: { control: 'boolean' },
    showZero: { control: 'boolean' }
  }
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = args => (
  <div className='rounded-full w-[40px] h-[40px] bg-red-300 relative flex items-center justify-center'>
    <Badge {...args} className='absolute -top-2 -right-4' />
    <span>VL</span>
  </div>
)

export const SimpleBadge = Template.bind({})

SimpleBadge.args = {
  badgeContent: '11'
}

export const PrimaryBadge = Template.bind({})

PrimaryBadge.args = {
  primary: true
}

export const SimpleBadgeWithMaxContent = Template.bind({})

SimpleBadgeWithMaxContent.args = {
  max: 100,
  badgeContent: '111'
}

export const ShowZero = Template.bind({})

ShowZero.args = {
  showZero: true,
  badgeContent: '0'
}
