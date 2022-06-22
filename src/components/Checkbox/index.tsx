/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import './style.scss'

interface ICheckbox {
  // Require
  onChange: any
  checked: boolean
  // Optional
  label?: string
  value?: string
  className?: string
  classNameCheckbox?: string
  disabled?: boolean
}

const Checkbox: React.FC<ICheckbox> = ({ onChange, checked = false, label, disabled, value }) => {
  return (
    <label className={['vl-checkbox', disabled ? 'vl-checkbox-disabled' : ''].join(' ')}>
      <span className={['vl-checkbox__input', checked ? 'vl-checkbox-checked' : ''].join(' ')}>
        <input disabled={disabled} checked={checked} type='checkbox' onChange={onChange} value={value} />
        <span className='vl-checkbox-inner' />
      </span>
      <span className={['vl-checkbox__label', checked ? 'checked' : ''].join(' ')}>{label}</span>
    </label>
  )
}

export default Checkbox
