import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Radio from '../Radio'

export default {
  title: 'ComponentsVer2/Radio',
  component: Radio,
  argTypes: {
    disabled: { control: 'boolean' }
  },
  args: {}
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = args => (
  <Radio {...args} className='ml-5'>
    {args.children}
  </Radio>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Apple',
  value: 'apple'
}
