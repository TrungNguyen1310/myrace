import React from 'react'
import './style.scss'

interface IBadge {
  // REQUIRED
  badgeContent: string | number
  // OPTIONAL
  className?: string
  classNameBadge?: string
  bgcolor?: string
  primary?: boolean
  max?: number
  showZero?: boolean
}

const Badge: React.FC<IBadge> = ({ badgeContent, className, classNameBadge, showZero, max = 99, primary, ...props }) => {
  const baseStyle = `${primary ? 'vl-badge-primary' : 'vl-badge-base'}`

  if ((badgeContent === 0 || badgeContent === '0') && !showZero) return null
  return (
    <div className={className}>
      <div {...props} className={['vl-badge', baseStyle, classNameBadge].join(' ')}>
        {+badgeContent < max ? badgeContent : `${max}+`}
      </div>
    </div>
  )
}

export default Badge
