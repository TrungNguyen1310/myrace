import React, { ReactNode } from 'react'
import { Radio as AntRadio } from 'antd'
import './style.scss'

interface IRadio {
  children?: ReactNode
  className?: string
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  primary?: boolean
}

const Radio: React.FC<IRadio> = props => {
  const { children, className, primary } = props
  const primaryClassname = primary ? 'vl-radio-primary' : 'vl-radio-base'
  return <AntRadio className={['vl-radio', primaryClassname, className].join(' ')}>{children}</AntRadio>
}

export default Radio
