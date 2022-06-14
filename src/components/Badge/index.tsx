import React, { ReactNode } from 'react'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import './style.scss'

interface IBadge {
  children: ReactNode
  badgeContent: string | number
  className?: string
  bgcolor?: string
  primary?: boolean
  max?: number
  showZero?: boolean
}

const VlBadge: React.FC<IBadge> = ({ children, className, primary, bgcolor, ...props }) => {
  const baseStyle = `${primary ? 'vl-badge-primary' : 'vl-badge-base'}`

  const StyledBadge = styled(Badge)<IBadge>(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: bgcolor || (primary ? theme.palette.color.primary.primary_blue : theme.palette.color.vl_white.DEFAULT)
    }
  }))

  return (
    <StyledBadge {...props} className={['vl-badge', baseStyle, className].join(' ')}>
      {children}
    </StyledBadge>
  )
}

export default VlBadge
