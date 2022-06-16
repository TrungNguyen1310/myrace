/* eslint-disable @typescript-eslint/no-explicit-any */
import useOutsideClick from 'components/Select/util'
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
  classNameSelect?: string
  labelStyle?: string
}

const Select: React.FC<ISelect> = ({
  options = [],
  placeholder = 'Select...',
  onChange = () => undefined,
  disabled,
  label: labelText,
  variant = 'outlined',
  className,
  classNameSelect,
  labelStyle
}) => {
  const optEl = useRef<any>([])
  const [open, setOpen] = useState<boolean>(false)
  const [activeOpt, setActiveOpt] = useState<string>(placeholder)

  const detectSelectEventMouse = () => {
    // handle click outside Select component
    setTimeout(() => {
      setOpen(false)
    }, 40)
  }
  const ref = useOutsideClick(detectSelectEventMouse)

  const onClickOption = (i: number) => {
    const getOption = options.find(opt => opt.value === optEl.current[i].value)
    const label = getOption?.label || ''

    onChange(getOption)
    setOpen(false)
    setActiveOpt(label)
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
    <div className={['select-box', className].join(' ')}>
      {/* OPTIONS DROPDOWN */}
      <div className={['options-container', `${variant === 'outlined' ? 'top-20' : 'top-[70px]'}`, `${open ? 'active' : ''}`].join(' ')}>{renderOptions()}</div>

      {/* LABEL TEXT */}
      {labelText && <label className={['select-box__labelText text-xs font-medium pb-2', labelStyle].join(' ')}>{labelText}</label>}

      {/* FORM SELECT */}
      <div
        className={[
          open ? (variant === 'outlined' ? 'border-solid border border-vl_grey-700' : 'border-solid border-b-2 border-vl_grey-700') : '',
          variant === 'outlined' ? 'vl-select-outlined' : 'vl-select-standard',
          activeOpt !== placeholder ? 'text-vl_black' : 'text-vl_grey-700',
          disabled ? 'disabled' : '',
          classNameSelect
        ].join(' ')}
        onClick={onClickSelect}
        ref={ref}
      >
        {activeOpt}
      </div>
    </div>
  )
}

export default Select
