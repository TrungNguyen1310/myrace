import React from 'react'
import { Checkbox } from 'antd'
import type { CheckboxValueType } from 'antd/es/checkbox/Group'
import './style.scss'

interface ICheckboxGroup {
  className?: string
  disabled?: boolean
  onChange?: (checkedValues: CheckboxValueType[]) => void
  options: string[] | { label: string; value: string; disabled?: boolean }[]
  defaultValue?: string[]
  value?: string[]
}

const CheckboxGroup: React.FC<ICheckboxGroup> = props => {
  const { className } = props
  return <Checkbox.Group {...props} className={['vl-checkbox-group', className].join(' ')} />
}

export default CheckboxGroup
