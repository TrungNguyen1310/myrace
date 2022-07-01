import React, { ReactNode } from 'react'
import { Button as ButtonAntd } from 'antd'
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
  const bgPrimary = type === 'primary' ? 'bg-primary_blue' : 'bg-transparent'
  const btnIconStyle = icon ? 'flex items-center justify-center' : ''

  return (
    <ButtonAntd {...props} className={['vl-btn', className, bgPrimary, btnIconStyle].join(' ')}>
      {children}
    </ButtonAntd>
  )
}

export default Button
