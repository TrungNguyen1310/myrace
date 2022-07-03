import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Checkbox from '../Checkbox'

export default {
  title: 'ComponentsVer2/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: { control: 'boolean' }
  },
  args: {}
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = args => (
  <Checkbox {...args} className='ml-5'>
    {args.children}
  </Checkbox>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Apple'
}
