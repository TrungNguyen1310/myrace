import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ReactComponent as SocialIcon } from 'assets/icons/social.svg'

import Input from '../Input'

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    disabled: false
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

export const IconInput = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IconInput.args = {
  label: 'Social',
  placeholder: 'Type...',
  // value: 'Social',
  icon: <SocialIcon />
}
