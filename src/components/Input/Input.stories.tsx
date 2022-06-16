import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Input from '../Input'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    value: { control: '' }
  },
  args: {
    // value: ''
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const Outlined = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Outlined.args = {
  label: 'Email',
  placeholder: 'Input email...'
}

export const Standard = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
  label: 'Email',
  placeholder: 'Input email...',
  variant: 'standard',
  value: 'OKOOKO'
}
