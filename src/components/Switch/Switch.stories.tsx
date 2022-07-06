import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Switch from '../Switch'

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    disabled: { control: 'boolean' }
  },
  args: {}
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = args => <Switch {...args} className='ml-5' />

export const Default = Template.bind({})
Default.args = {}
