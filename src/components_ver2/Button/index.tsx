import React, { ReactNode } from 'react'
import { Button as ButtonAntd } from 'antd'
import { ButtonProps } from 'antd/lib/button'
import './style.scss'

interface BtnProps {
  children?: ReactNode
  className?: string
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined
}

const Button: React.FC<BtnProps | ButtonProps> = props => {
  const { children, className, type } = props
  const bgPrimary = type === 'primary' ? 'bg-primary_blue' : 'bg-transparent'

  return (
    <ButtonAntd {...props} className={['vl-btn', className, bgPrimary].join(' ')}>
      {children}
    </ButtonAntd>
  )
}

export default Button
