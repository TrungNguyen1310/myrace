import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Radio from '../Radio'
export default {
  title: 'Components/Radio',
  component: Radio,
  args: {
    label: 'Apple'
  }
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = args => {
  const [value, setValue] = useState(false)

  return <Radio {...args} value='apple' checked={value} onChange={e => setValue(e.target.checked)} />
}

const TemplateWithDefaultValue: ComponentStory<typeof Radio> = args => {
  return <Radio {...args} />
}

export const SimpleRadio = Template.bind({})

SimpleRadio.args = {
  label: 'Lemon'
}

export const DefaultValueRadio = TemplateWithDefaultValue.bind({})

DefaultValueRadio.args = {
  label: 'Default value',
  value: 'default-value',
  checked: true
}

export const DisabledRadio = Template.bind({})

DisabledRadio.args = {
  disabled: true
}
