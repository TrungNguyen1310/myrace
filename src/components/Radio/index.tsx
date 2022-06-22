/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import './style.scss'

interface IRadio {
  // Require
  value: string | number | undefined
  label: string
  onChange?: any
  // Optional
  primary?: boolean
  checked?: boolean
  disabled?: boolean
  className?: string
}

const Radio: React.FC<IRadio> = ({ value, onChange = () => undefined, primary, label, disabled, checked: checkedRadio = false }) => {
  const [checked, setChecked] = useState<boolean>(checkedRadio)

  useEffect(() => {
    setChecked(checkedRadio)
  }, [checkedRadio])

  const onChangeRadio = e => {
    setChecked(e.target.checked)
    onChange(e)
  }

  return (
    <label className={['vl-radio', disabled ? 'vl-radio-disabled' : ''].join(' ')}>
      <span className={['vl-radio__input', value && checked ? 'vl-radio-checked' : ''].join(' ')}>
        <input checked={checked} disabled={disabled} type='radio' onChange={onChangeRadio} value={value} />
        <span className={['vl-radio-inner', `vl-radio-inner-${primary ? 'primary' : 'secondary'}`].join(' ')} />
      </span>
      <span className={['vl-radio__label', value && checked ? 'checked' : ''].join(' ')}>{label}</span>
    </label>
  )
}
export default Radio
