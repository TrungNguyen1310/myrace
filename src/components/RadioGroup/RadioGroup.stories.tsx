import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import RadioGroup from '../RadioGroup'
import Radio from 'components/Radio'

export default {
  title: 'ComponentsVer2/RadioGroup',
  component: RadioGroup,
  argTypes: {
    disabled: { control: 'boolean' }
  },
  args: {}
} as ComponentMeta<typeof RadioGroup>

const Template: ComponentStory<typeof RadioGroup> = args => (
  <RadioGroup {...args} className='ml-5'>
    <Radio value='1'>Adidas</Radio>
    <Radio value='2'>Nike</Radio>
  </RadioGroup>
)

export const Default = Template.bind({})
Default.args = {}
