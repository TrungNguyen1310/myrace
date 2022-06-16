import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Select from '../Select'

export default {
  title: 'Components/Select',
  component: Select,
  args: {
    disabled: false,
    options: [
      {
        value: 'apple',
        label: 'Apple'
      },
      {
        value: 'lemon',
        label: 'Lemon'
      },
      {
        value: 'melon',
        label: 'melon'
      }
    ]
  }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => <Select {...args} />

export const Outlined = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Outlined.args = {
  label: 'Juice',
  placeholder: 'Select juice...',
  defaultValue: 'apple'
}

export const Standard = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
  label: 'Juice',
  placeholder: 'Select juice...',
  variant: 'standard'
}
