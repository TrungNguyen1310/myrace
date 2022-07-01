import React, { ReactNode } from 'react'
import { Input as AntInput } from 'antd'
import './style.scss'

interface IInput {
  // OPTIONAL
  value?: string | number | readonly string[] | undefined
  type?: string
  label?: string
  variant?: 'standard' | 'outlined'
  disabled?: boolean
  placeholder?: string
  className?: string
  icon?: string | ReactNode
}

const Input: React.FC<IInput> = props => {
  const { className, variant = 'outlined' } = props
  const variantClassname = variant === 'outlined' ? 'vl-input-outlined' : 'vl-input-standard'

  return <AntInput {...props} className={['vl-input', variantClassname, className].join(' ')} />
}

export default Input
