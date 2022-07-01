/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react'
import { Input as AntInput } from 'antd'
import './style.scss'

interface IInput {
  // OPTIONAL
  addonAfter?: ReactNode
  addonBefore?: ReactNode
  maxLength?: number
  typeInput?: 'Password' | 'default'
  label?: string
  variant?: 'standard' | 'outlined'
  disabled?: boolean
  status?: 'error' | 'warning'
  iconRender?: (visible: boolean) => ReactNode
  placeholder?: string
  className?: string
  prefix?: string | ReactNode
  suffix?: string | ReactNode
  allowClear?: boolean | { clearIcon: ReactNode }
  defaultValue?: string
  onChange?: (e: any) => void
  onPressEnter?: (e: any) => void
}

const Input: React.FC<IInput> = props => {
  const { className, variant = 'outlined', typeInput = 'default' } = props
  const variantClassname = variant === 'outlined' ? 'vl-input-outlined' : 'vl-input-standard'

  if (typeInput === 'Password') return <AntInput.Password {...props} className={['vl-input', variantClassname, className].join(' ')} />

  return <AntInput {...props} className={['vl-input', variantClassname, className].join(' ')} />
}

export default Input
