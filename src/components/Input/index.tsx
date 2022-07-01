import React, { ReactNode } from 'react'
import './style.scss'

interface IInput {
  // REQUIRED
  value: string | number | readonly string[] | undefined
  // OPTIONAL
  type?: string
  label?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
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
        <div className='vl-old-input-outlined'>
          <input disabled={disabled} type={type} value={value} onChange={onChange} className={['vl-old-input-outlined__input', icon ? 'pr-12' : '', classNameInput].join(' ')} placeholder={placeholder} />
          {icon && <div className='pl-2 vl-old-input-outlined__icon cursor-pointer'>{icon}</div>}
        </div>
      )}
    </>
  )

  const standardInput = () => (
    <>
      {variant === 'standard' && (
        <div className='vl-old-input-standard'>
          <input disabled={disabled} type={type} value={value} onChange={onChange} className={['vl-old-input-standard__input', icon ? 'pr-12' : '', classNameInput].join(' ')} placeholder={placeholder} />
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
