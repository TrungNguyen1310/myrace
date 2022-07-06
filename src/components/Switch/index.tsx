/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Switch as AntSwitch } from 'antd'
import './style.scss'

interface ISwitch {
  className?: string
  disabled?: boolean
  checked?: boolean
  defaultChecked?: boolean
  loading?: boolean
  onChange?: (checked: boolean) => void
  onClick?: (checked: boolean) => void
}

const Switch: React.FC<ISwitch> = props => {
  const { className } = props

  return <AntSwitch {...props} className={['vl-switch', className].join(' ')} />
}

export default Switch
