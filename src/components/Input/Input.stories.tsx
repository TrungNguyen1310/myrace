import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons'

import Input from '../Input'
export default {
  title: 'ComponentsVer2/Input',
  component: Input,
  argTypes: {
    disabled: { control: 'boolean' }
  },
  args: {
    placeholder: 'Type...'
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />
const PasswordTemplate: ComponentStory<typeof Input> = args => <Input inputType='Password' {...args} />

export const Default = Template.bind({})

Default.args = {}

export const VariantInput = Template.bind({})

VariantInput.args = {
  variant: 'standard'
}

export const IconInput = Template.bind({})

IconInput.args = {
  prefix: <UserOutlined />,
  suffix: <InfoCircleOutlined />
}

export const PasswordInput = PasswordTemplate.bind({})

PasswordInput.args = {
  iconRender: visible => (visible ? <InfoCircleOutlined /> : <UserOutlined />)
}
