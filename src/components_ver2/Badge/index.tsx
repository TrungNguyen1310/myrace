import React, { ReactNode } from 'react'
import { Badge as AntBadge } from 'antd'
import './style.scss'

interface IBadge {
  count: ReactNode
  text?: ReactNode
  children?: ReactNode
  color?: string
  className?: string
  dot?: boolean
  showZero?: boolean
  primary?: boolean
  offset?: [number, number]
}

const Badge: React.FC<IBadge> = props => {
  const { children, className, primary, color } = props
  const primaryClassname = primary ? 'vl-badge-primary' : color ? '' : 'vl-badge-base'
  return (
    <AntBadge {...props} className={['vl-badge', primaryClassname, className].join(' ')}>
      {children}
    </AntBadge>
  )
}

export default Badge
