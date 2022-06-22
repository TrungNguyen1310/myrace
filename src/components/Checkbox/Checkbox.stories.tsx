import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Checkbox from '../Checkbox'
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    label: 'Apple'
  }
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = args => {
  const [value, setValue] = useState(false)

  return <Checkbox {...args} value='apple' checked={value} onChange={e => setValue(e.target.checked)} />
}

const TemplateWithDefaultValue: ComponentStory<typeof Checkbox> = args => {
  const [value, setValue] = useState(true)

  return <Checkbox {...args} value='apple' checked={value} onChange={e => setValue(e.target.checked)} />
}

export const SimpleCheckbox = Template.bind({})

SimpleCheckbox.args = {
  label: 'Lemon'
}

export const DefaultValueCheckbox = TemplateWithDefaultValue.bind({})

DefaultValueCheckbox.args = {
  label: 'Default value',
  checked: true
}

export const DisabledCheckbox = Template.bind({})

DisabledCheckbox.args = {
  disabled: true
}
