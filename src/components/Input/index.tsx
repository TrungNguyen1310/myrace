/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react'
import './style.scss'

interface IInput {
  // REQUIRED
  value: string | number | readonly string[] | undefined
  // OPTIONAL
  label?: string
  onChange?: any
  variant?: 'standard' | 'outlined'
  className?: string
  disabled?: boolean
  placeholder?: string
  classNameInput?: string
  labelStyle?: string
  icon?: string | ReactNode
}

const Input: React.FC<IInput> = ({ className, classNameInput, label: labelText, labelStyle, value, onChange = () => undefined, placeholder, icon = 'OK' }) => {
  return (
    <div className={['input-box', className].join(' ')}>
      {/* LABEL TEXT */}
      {labelText && <label className={['input-box__labelText text-xs font-medium pb-2', labelStyle].join(' ')}>{labelText}</label>}

      {/* INPUT FORM */}
      <div className='vl-input-outlined'>
        <input value={value} onChange={onChange} className={['vl-input-outlined__input', classNameInput].join(' ')} placeholder={placeholder} />
        {icon && <div className='pl-4 vl-input-outlined__icon'>icon</div>}
      </div>
    </div>
  )
}

export default Input
