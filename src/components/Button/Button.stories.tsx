import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SearchOutlined } from '@ant-design/icons'
import { ReactComponent as SocialIcon } from 'assets/icons/social.svg'

import Button from '../Button'
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    loading: { control: 'radio', options: [true, false] },
    disabled: { control: 'boolean' }
  },
  args: {}
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args}>{args.children}</Button>

export const Default = Template.bind({})

Default.args = {
  type: 'default',
  children: 'Button',
  icon: <SocialIcon />
}

export const Primary = Template.bind({})

Primary.args = {
  type: 'primary',
  children: 'Primary Button'
}

export const ShapeBtn = Template.bind({})

ShapeBtn.args = {
  shape: 'circle',
  icon: <SearchOutlined />
}
