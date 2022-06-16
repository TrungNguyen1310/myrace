/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react'
import './style.scss'

interface IInput {
  // REQUIRED
  value: string | number | readonly string[] | undefined
  // OPTIONAL
  type?: string
  label?: string
  onChange?: any
  variant?: 'standard' | 'outlined'
  disabled?: boolean
  placeholder?: string
  className?: string
  classNameInput?: string
  labelStyle?: string
  icon?: string | ReactNode
}

const Input: React.FC<IInput> = ({
  className,
  classNameInput,
  label: labelText,
  labelStyle,
  value,
  onChange = () => undefined,
  placeholder,
  icon,
  type = 'text',
  variant = 'outlined',
  disabled = false
}) => {
  const outlinedInput = () => (
    <>
      {variant === 'outlined' && (
        <div className='vl-input-outlined'>
          <input disabled={disabled} type={type} value={value} onChange={onChange} className={['vl-input-outlined__input', icon ? 'pr-12' : '', classNameInput].join(' ')} placeholder={placeholder} />
          {icon && <div className='pl-2 vl-input-outlined__icon cursor-pointer'>{icon}</div>}
        </div>
      )}
    </>
  )

  const standardInput = () => (
    <>
      {variant === 'standard' && (
        <div className='vl-input-standard'>
          <input disabled={disabled} type={type} value={value} onChange={onChange} className={['vl-input-standard__input', icon ? 'pr-12' : '', classNameInput].join(' ')} placeholder={placeholder} />
        </div>
      )}
    </>
  )
  return (
    <div className={['input-box', className].join(' ')}>
      {/* LABEL TEXT */}
      {labelText && <label className={['input-box__labelText text-xs font-medium pb-2', labelStyle].join(' ')}>{labelText}</label>}

      {/* INPUT FORM */}
      {outlinedInput()}
      {standardInput()}
    </div>
  )
}

export default Input