import React from 'react'
import './style.scss'

interface ICheckbox {
  // REQUIRED
  onChange: React.ChangeEventHandler<HTMLInputElement>
  checked: boolean
  // OPTIONAL
  label?: string
  value?: string
  className?: string
  classNameCheckbox?: string
  disabled?: boolean
}

const Checkbox: React.FC<ICheckbox> = ({ onChange, checked = false, label, disabled, value }) => {
  return (
    <label className={['vl-old-checkbox', disabled ? 'vl-old-checkbox-disabled' : ''].join(' ')}>
      <span className={['vl-old-checkbox__input', checked ? 'vl-old-checkbox-checked' : ''].join(' ')}>
        <input disabled={disabled} checked={checked} type='checkbox' onChange={onChange} value={value} />
        <span className='vl-old-checkbox-inner' />
      </span>
      <span className={['vl-old-checkbox__label', checked ? 'checked' : ''].join(' ')}>{label}</span>
    </label>
  )
}

export default Checkbox
