import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar } from 'antd'
import Badge from '../Badge'

export default {
  title: 'ComponentsVer2/Badge',
  component: Badge,
  args: {}
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = args => (
  <Badge {...args} className='ml-5'>
    <Avatar shape='square' size='large' />
  </Badge>
)

export const Default = Template.bind({})
Default.args = {
  count: 10
}

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  count: 10
}

export const Showzero = Template.bind({})
Showzero.args = {
  count: 0,
  showZero: true
}

export const CustomColorBadge = Template.bind({})
CustomColorBadge.args = {
  count: 50,
  color: '#27ec2a'
}

export const OverFlowBadge = Template.bind({})
OverFlowBadge.args = {
  count: 101,
  overflowCount: 100
}

export const Dot = Template.bind({})
Dot.args = {
  count: 101,
  dot: true,
  color: '#22eae4'
}
