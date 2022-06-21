import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ReactComponent as SocialIcon } from 'assets/icons/social.svg'

import Button from '../Button'
export default {
  title: 'Components/Button',
  component: Button,
  args: {}
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  primary: true,
  children: 'Button'
}

export const PrimaryBlue = Template.bind({})

PrimaryBlue.args = {
  primaryBlue: true,
  children: 'Primary Blue Button'
}

export const PrimaryPurple = Template.bind({})

PrimaryPurple.args = {
  primaryPurple: true,
  children: 'Primary Purple Button'
}

export const SecondaryYellow = Template.bind({})

SecondaryYellow.args = {
  secondaryYellow: true,
  children: 'Secondary Yellow Button'
}

export const SecondaryPink = Template.bind({})

SecondaryPink.args = {
  secondaryPink: true,
  children: 'Secondary Pink Button'
}

export const ShapeButton = Template.bind({})

ShapeButton.args = {
  children: 'VL',
  shape: 'circle'
}

export const IconButton = Template.bind({})

IconButton.args = {
  children: 'Search',
  icon: <SocialIcon />
}
