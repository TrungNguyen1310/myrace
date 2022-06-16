/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react'
import './style.scss'

interface ISelect {
  // REQUIRED
  options: { value: string; label: string }[]

  // OPTIONAL
  label?: string
  onChange?: any
  variant?: 'standard' | 'outlined'
  disabled?: boolean
  placeholder?: string
  className?: string
}

const Select: React.FC<ISelect> = ({ options = [], placeholder = 'Select...', onChange = () => undefined, disabled, label: labelText, variant = 'outlined' }) => {
  const optEl = useRef<any>([])
  const [open, setOpen] = useState<boolean>(false)
  const [activeOpt, setActiveOpt] = useState<string>(placeholder)

  const onClickOption = (i: number) => {
    const getOption = options.find(opt => opt.value === optEl.current[i].value)
    const label = getOption?.label || ''

    onChange(getOption)

    setOpen(false)
    setTimeout(() => {
      setActiveOpt(label)
    }, 200)
  }

  const onClickSelect = () => {
    if (disabled) {
      setOpen(false)
    } else {
      setOpen(!open)
    }
  }

  const renderOptions = () => (
    <>
      {options.map((option, index) => (
        <div className='option p-2' key={option.value} onClick={() => onClickOption(index)}>
          <input type='radio' className='radio' id={option.value} name={option.value} value={option.value} ref={el => optEl.current.push(el)} />
          <label htmlFor='automobiles'>{option.label}</label>
        </div>
      ))}
    </>
  )

  return (
    <div className={['flex max-w-[400px] flex-col select-box'].join(' ')}>
      {/* OPTIONS DROPDOWN */}
      <div className={['options-container', `${open ? 'active' : ''}`].join(' ')}>{renderOptions()}</div>

      {/* LABEL TEXT */}
      {labelText && <label className='select-box__labelText text-xs font-medium pb-2'>{labelText}</label>}

      {/* FORM SELECT */}
      <div
        className={[
          open ? (variant === 'outlined' ? 'border-solid border border-vl_grey-700' : 'border-solid border-b-2 border-vl_grey-700') : '',
          variant === 'outlined' ? 'vl-select-outlined' : 'vl-select-standard',
          activeOpt !== placeholder ? 'text-vl_black' : 'text-vl_grey-700',
          disabled ? 'disabled' : ''
        ].join(' ')}
        onClick={onClickSelect}
      >
        {activeOpt}
      </div>
    </div>
  )
}

export default Select
