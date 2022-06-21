/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import './style.scss'

interface ICheckbox {
  // Require
  onChange: any
  checked: boolean
  // Optional
  label?: string
  className?: string
  labelStyle?: string
  classNameCheckbox?: string
  disabled?: boolean
  darkMode?: boolean
}

const Checkbox: React.FC<ICheckbox> = ({ onChange, checked = false, label, disabled, ...props }) => {
  return (
    <label className={`vl-checkbox ${disabled ? 'vl-checkbox-disabled' : ''}`}>
      <span className={`vl-checkbox__input ${checked ? 'vl-checkbox-checked' : ''}`}>
        <input disabled={disabled} checked={checked} type='checkbox' onChange={onChange} />
        <span className='vl-checkbox-inner' />
      </span>
      <span className={`vl-checkbox__label ${checked ? 'checked' : ''}`}>{label}</span>
    </label>
  )
}

export default Checkbox
