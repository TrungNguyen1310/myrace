import React, { ReactNode } from 'react'
import type { RadioChangeEvent } from 'antd'
import { Radio as AntRadio } from 'antd'

import './style.scss'

interface IRadioGroup {
  children?: ReactNode
  className?: string
  value?: string | number
  primary?: boolean
  onChange?: (e: RadioChangeEvent) => void
  options?: string[] | { label: string; value: string; disabled?: boolean }[]
}

const RadioGroup: React.FC<IRadioGroup> = props => {
  const { children, className, primary = false } = props
  const primaryClassname = primary ? 'vl-radio-group-primary' : 'vl-radio-group-base'
  return (
    <AntRadio.Group {...props} className={['vl-radio-group', primaryClassname, className].join(' ')}>
      {children}
    </AntRadio.Group>
  )
}

export default RadioGroup
