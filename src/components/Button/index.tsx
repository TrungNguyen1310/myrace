/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react'
import { Button as MuiButton } from '@mui/material'
import { styled } from '@mui/material/styles'

interface BtnProps {
  children: ReactNode
  className?: string
  borderColor?: string | 'none' // use Tailwind classname
  // PRIMARY
  primary?: boolean
  primaryBlue?: boolean
  primaryPurple?: boolean
  // SECONDARY
  secondaryYellow?: boolean
  secondaryPink?: boolean
}

const ButtonStyled = styled(MuiButton)(() => ({
  '&:disabled': {
    backgroundColor: '#b7b7b74f',
    cursor: 'not-allowed',
    pointerEvents: 'all'
  }
}))

const VlButton: React.FC<BtnProps | any> = ({
  children = null,
  className = '',
  borderColor = 'border-vl_grey-500',
  primary = false,
  primaryBlue = false,
  primaryPurple = false,
  secondaryYellow = false,
  secondaryPink = false,
  ...props
}) => {
  const baseStyle = 'rounded-[23px] h-[40px] p-[12px] normal-case text-vl_black font-bold text-xs xl:text-sm'
  const borderStyle = borderColor === 'none' ? '' : `border-solid border ${borderColor}`
  const primarySecondaryStyle = () => {
    if (primary) return 'bg-vl_neon'
    if (primaryBlue) return 'bg-primary_blue text-vl_white'
    if (primaryPurple) return 'bg-primary_purple text-vl_white'
    if (secondaryYellow) return 'bg-secondary_yellow text-vl_white'
    if (secondaryPink) return 'bg-secondary_pink text-vl_white'

    return ''
  }

  return (
    <ButtonStyled {...props} className={[baseStyle, borderStyle, primarySecondaryStyle(), className].join(' ')}>
      {children}
    </ButtonStyled>
  )
}

export default VlButton
