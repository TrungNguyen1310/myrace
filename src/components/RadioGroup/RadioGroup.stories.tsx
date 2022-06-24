import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import RadioGroup from '../RadioGroup'
export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  args: {
    label: 'Apple'
  }
} as ComponentMeta<typeof RadioGroup>

const options = [
  { label: 'Viet Nam', value: 'vn' },
  { label: 'USA', value: 'usa' },
  { label: 'Canada', value: 'ca' }
]

const SimpleRadioGroup: ComponentStory<typeof RadioGroup> = args => {
  const [value, setvalue] = useState<number | string | undefined>('')

  return <RadioGroup {...args} value={value} radioList={options} onChange={e => setvalue(e.value)} />
}

const DisabledTemplate: ComponentStory<typeof RadioGroup> = args => {
  const [value, setvalue] = useState<number | string | undefined>('')

  return (
    <RadioGroup
      {...args}
      value={value}
      radioList={[
        { label: 'Apple', value: 'apple' },
        { label: 'Lemon', value: 'lemon', disabled: true },
        { label: 'Melon', value: 'melon' }
      ]}
      onChange={e => setvalue(e.value)}
    />
  )
}

export const Template = SimpleRadioGroup.bind({})
Template.args = {}

export const Disabled = DisabledTemplate.bind({})
Disabled.args = {}
