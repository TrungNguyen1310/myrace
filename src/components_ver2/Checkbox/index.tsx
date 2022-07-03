import React, { ReactNode } from 'react'
import { Checkbox as AntCheckbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import './style.scss'

interface ICheckbox {
  children?: ReactNode
  className?: string
  value?: string
  disabled?: boolean
  defaultChecked?: boolean
  checked?: boolean
  onChange?: (e: CheckboxChangeEvent) => void
}

const Checkbox: React.FC<ICheckbox> = props => {
  const { children, className } = props
  return (
    <AntCheckbox {...props} className={['vl-checkbox', className].join(' ')}>
      {children}
    </AntCheckbox>
  )
}

export default Checkbox
