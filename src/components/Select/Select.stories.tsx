import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Select as AntSelect } from 'antd'
import Select from '../Select'

const { Option } = AntSelect

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    disabled: { control: 'boolean' }
  },
  args: {
    placeholder: 'Select...'
  }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => (
  <Select {...args} className='mt-20'>
    <Option value='vn'>Viet Nam</Option>
    <Option value='usa'>USA</Option>
  </Select>
)

export const Default = Template.bind({})

Default.args = {}

export const VariantInput = Template.bind({})

VariantInput.args = {
  variant: 'standard'
}
