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

const StyledBadge = styled(Badge)<IBadge>(({ theme, bgcolor, primary }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: bgcolor || (primary ? theme.palette.color.primary.primary_blue : theme.palette.color.vl_white),
    color: primary ? theme.palette.color.vl_white.DEFAULT : theme.palette.color.vl_black.DEFAULT,
    fontSize: theme.palette.fontSize.xs,
    fontWeight: 700,
    lineHeight: theme.palette.lineHeight.xs,
    border: primary ? 'none' : `1px solid ${theme.palette.color.vl_grey[500]}`,
    minWidth: '26px',
    minHeight: '18px',
    height: 'auto',
    padding: '0 9px'
  }
}))

const VlBadge: React.FC<IBadge> = ({ children, className, ...props }) => {
  const baseStyle = `${props.primary ? 'vl-badge-primary' : 'vl-badge'}`
  return (
    <StyledBadge {...props} className={[baseStyle, className].join(' ')}>
      {children}
    </StyledBadge>
  )
}

export default VlBadge
