import React, { ReactNode } from 'react'
import './style.scss'

interface BtnProps {
  children?: ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLElement>
  disabled?: boolean
  borderColor?: string | 'none' // use Tailwind classname
  shape?: 'default' | 'circle'
  icon?: string | ReactNode
  // PRIMARY
  primary?: boolean
  primaryBlue?: boolean
  primaryPurple?: boolean
  // SECONDARY
  secondaryYellow?: boolean
  secondaryPink?: boolean
}

const Button: React.FC<BtnProps> = ({
  children = null,
  className = '',
  borderColor = 'border-vl_grey-500',
  primary = false,
  primaryBlue = false,
  primaryPurple = false,
  secondaryYellow = false,
  secondaryPink = false,
  shape = 'default',
  icon,
  ...props
}) => {
  const shapeStyle = shape === 'default' ? 'vl-button-default' : 'vl-button-icon-only'
  const baseStyle = 'vl-button'
  const borderStyle = borderColor === 'none' ? '' : `border-solid border ${borderColor}`
  const primarySecondaryStyle = () => {
    if (primary) return 'bg-vl_neon hover:bg-lime-500'
    if (primaryBlue) return 'bg-primary_blue text-vl_white hover:bg-blue-500'
    if (primaryPurple) return 'bg-primary_purple text-vl_white hover:bg-[#906ef8]'
    if (secondaryYellow) return 'bg-secondary_yellow text-vl_white hover:bg-yellow-300'
    if (secondaryPink) return 'bg-secondary_pink text-vl_white hover:bg-pink-400'

    return ''
  }

  return (
    <button type='button' {...props} className={[className, baseStyle, borderStyle, shapeStyle, primarySecondaryStyle()].join(' ')}>
      {/* BOTH CHILDREN AND ICON */}
      {children && icon && (
        <div className='flex items-center justify-between px-4'>
          <span className='vl-button__icon'>{icon}</span>
          <span className='pl-2'>{children}</span>
        </div>
      )}

      {/* ONLY CHILDREN */}
      {children && !icon && <span className={['flex items-center justify-center', shape === 'default' ? 'px-4' : ''].join(' ')}>{children}</span>}

      {/* ONLY ICON */}
      {icon && !children && <span className='flex items-center justify-center'>{icon}</span>}
    </button>
  )
}

export default Button
