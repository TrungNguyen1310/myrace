import React, { ReactNode } from 'react'
import { Button as AntButton } from 'antd'
import { ButtonProps } from 'antd/lib/button'
import './style.scss'

interface BtnProps {
  children?: ReactNode
  className?: string
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined
  disabled?: boolean
  shape?: 'default' | 'circle' | 'round'
  loading?: boolean | { delay: number }
  icon?: ReactNode
}

const Button: React.FC<BtnProps | ButtonProps> = props => {
  const { children, className, type = 'default', icon } = props
  const bgPrimary = () => {
    if (className?.includes('bg-')) {
      return ''
    }
    return type === 'primary' ? 'bg-primary_blue' : 'bg-vl_white'
  }

  const btnIconStyle = icon ? 'flex items-center justify-center' : ''

  return (
    <AntButton {...props} className={['vl-btn', className, bgPrimary(), btnIconStyle].join(' ')}>
      {children}
    </AntButton>
  )
}

export default Button
