/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react'
import { Button as MuiButton } from '@mui/material'

interface BtnProps {
  children: ReactNode
  className?: string
  border?: boolean
  borderColor?: string // use Tailwind classname
  primary?: boolean
}

const VlButton: React.FC<BtnProps | any> = ({ children = null, className = '', primary = false, border = false, borderColor = 'border-vl_grey-400', ...props }) => {
  const baseStyle = 'rounded-[23px] h-[40px] p-[12px] normal-case text-vl_black font-bold text-xs xl:text-sm'
  const borderStyle = border ? `border-solid border ${borderColor}` : ''
  const primaryStyle = primary ? 'border-solid border border-vl_grey-500 dark:text-white' : ''

  return (
    <MuiButton disableRipple {...props} className={[baseStyle, primaryStyle, borderStyle, className].join(' ')}>
      {children}
    </MuiButton>
  )
}

export default VlButton
