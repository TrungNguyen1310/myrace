import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CheckboxGroup from '../CheckboxGroup'

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    disabled: { control: 'boolean' }
  },
  args: {}
} as ComponentMeta<typeof CheckboxGroup>

const Template: ComponentStory<typeof CheckboxGroup> = args => <CheckboxGroup {...args} className='ml-5' />

export const Default = Template.bind({})
Default.args = {
  options: ['apple', 'lemon', 'melon']
}

export const DefaultValue = Template.bind({})
DefaultValue.args = {
  options: ['apple', 'lemon', 'melon'],
  defaultValue: ['lemon']
}

export const DisabledValue = Template.bind({})
DisabledValue.args = {
  options: [
    { label: 'Apple', value: 'apple' },
    { label: 'Lemon', value: 'lemon', disabled: true },
    { label: 'Melon', value: 'melon' }
  ],
  defaultValue: ['lemon']
}
