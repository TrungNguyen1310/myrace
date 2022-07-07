import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProgressBar from '../Progress'

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    primary: {
      control: { type: 'boolean' }
    },
    secondary_pink: {
      control: { type: 'boolean' }
    },
    secondary_yellow: {
      control: { type: 'boolean' }
    }
  }
} as ComponentMeta<typeof ProgressBar>

const Template: ComponentStory<typeof ProgressBar> = args => <ProgressBar {...args} />

export const Default = Template.bind({})
Default.args = {
  percent: 50
}
