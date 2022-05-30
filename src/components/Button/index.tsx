/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react'
import { Button as MuiButton } from '@mui/material'

interface BtnProps {
  children: ReactNode
  className?: string
  customprops?: {
    border?: boolean
    borderColor?: string // use Tailwind classname
  }
}

const Button: React.FC<BtnProps | any> = props => {
  const { children = null, className = '', customprops = {} } = props

  return (
    <MuiButton
      disableRipple
      {...props}
      className={`${
        customprops.border
          ? `border-solid border ${customprops.borderColor || 'border-vl_grey-500'}`
          : ''
      } rounded-[23px] h-[40px] p-[12px] normal-case text-vl_black font-bold ${className}`}
    >
      {children}
    </MuiButton>
  )
}

export default Button
