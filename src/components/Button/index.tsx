/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react'
import { Button as MuiButton } from '@mui/material'
import { styled } from '@mui/material/styles'

interface BtnProps {
  children: ReactNode
  className?: string
  border?: boolean
  borderColor?: string // use Tailwind classname
  primary?: boolean
}

const ButtonStyled = styled(MuiButton)(() => ({
  '&:disabled': {
    backgroundColor: '#b7b7b74f',
    cursor: 'not-allowed',
    pointerEvents: 'all'
  }
}))

const VlButton: React.FC<BtnProps | any> = ({ children = null, className = '', primary = false, border = false, borderColor = 'border-vl_grey-400', ...props }) => {
  const baseStyle = 'rounded-[23px] h-[40px] p-[12px] normal-case text-vl_black dark:text-white font-bold text-xs xl:text-sm'
  const borderStyle = border ? `border-solid border ${borderColor}` : ''
  const primaryStyle = primary ? 'border-solid border border-vl_grey-500 dark:text-white' : ''

  return (
    <ButtonStyled {...props} className={[baseStyle, primaryStyle, borderStyle, className].join(' ')}>
      {children}
    </ButtonStyled>
  )
}

export default VlButton
