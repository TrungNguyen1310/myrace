import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CheckboxGroup from '../CheckboxGroup'
export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  args: {
    checkboxesList: [
      {
        label: 'Apple',
        value: 'apple',
        checked: true,
        disabled: true
      },
      {
        label: 'Melon',
        value: 'melon',
        checked: false,
        disabled: true
      },
      {
        label: 'Orange',
        value: 'orange',
        checked: true
      },
      {
        label: 'Peache',
        value: 'peache',
        checked: false
      }
    ]
  }
} as ComponentMeta<typeof CheckboxGroup>

const SimpleCheckboxGroup: ComponentStory<typeof CheckboxGroup> = args => {
  const [value, setValue] = useState([
    {
      label: 'Apple',
      value: 'apple',
      checked: true,
      disabled: true
    },
    {
      label: 'Melon',
      value: 'melon',
      checked: false,
      disabled: true
    },
    {
      label: 'Orange',
      value: 'orange',
      checked: true
    },
    {
      label: 'Peache',
      value: 'peache',
      checked: false
    }
  ])

  return <CheckboxGroup {...args} checkboxesList={value} onCheckboxGroupChange={val => setValue(val)} />
}

export const Template = SimpleCheckboxGroup.bind({})

Template.args = {}
