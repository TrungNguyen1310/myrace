/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import './style.scss'

interface IRadio {
  // Require
  value: string | number | undefined
  label: string
  onChange: any
  // Optional
  primary?: boolean
  disabled?: boolean
  className?: string
}

const Radio: React.FC<IRadio> = ({ value, onChange, primary, label, disabled }) => {
  const [checked, setChecked] = useState<boolean>(false)

  const onChangeRadio = e => {
    setChecked(e.target.checked)
    onChange(e)
  }
  return (
    <label className={['vl-radio', disabled ? 'vl-radio-disabled' : ''].join(' ')}>
      <span className={['vl-radio__input', value && checked ? 'vl-radio-checked' : ''].join(' ')}>
        <input disabled={disabled} type='radio' onChange={onChangeRadio} value={value} />
        <span className={['vl-radio-inner', `vl-radio-inner-${primary ? 'primary' : 'secondary'}`].join(' ')} />
      </span>
      <span className={['vl-radio__label', value && checked ? 'checked' : ''].join(' ')}>{label}</span>
    </label>
  )
}
export default Radio
