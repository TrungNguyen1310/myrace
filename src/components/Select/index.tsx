/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useRef, useState } from 'react'
import styled from 'styled-components'
import ArrowIcon from 'assets/icons/arrowdown.svg'
import useOutsideClick from 'components/Select/util'
import OptionSelect from 'components/Select/Option'

import './style.scss'

interface ISelect {
  // REQUIRED
  options: { value: string; label: string }[]

  // OPTIONAL
  defaultValue?: string
  label?: string
  onChange?: any
  variant?: 'standard' | 'outlined'
  disabled?: boolean
  placeholder?: string
  placement?: 'top' | 'bottom'
  className?: string
  classNameSelect?: string
  labelStyle?: string
  icon?: string | ReactNode
}

const StyledSelect = styled.div`
  .vl-select-outlined.arrow-icon {
    &:after {
      content: '';
      background: url(${ArrowIcon});
      background-size: contain;
      background-repeat: no-repeat;

      position: absolute;
      height: 10px;
      width: 10px;
      right: 14px;
      top: 50%;
      transform: translate(-50%, -50%);

      transition: all 0.4s;
    }
  }

  .vl-select-outlined.selected {
    &::after {
      transform: translate(-50%, -50%) rotateX(180deg);
    }
  }
`

const Select: React.FC<ISelect> = ({
  options = [],
  placeholder = 'Select...',
  onChange = () => undefined,
  disabled,
  label: labelText,
  defaultValue,
  variant = 'outlined',
  className,
  classNameSelect,
  labelStyle,
  icon,
  placement = 'bottom'
}) => {
  const optEl = useRef<any>([])
  const getDefaultValue = (val: string) => {
    const getOption = options.find(opt => opt.value === val)
    return getOption?.label || placeholder
  }
  const [open, setOpen] = useState<boolean>(false)
  const [activeOpt, setActiveOpt] = useState<string>(defaultValue ? getDefaultValue(defaultValue) : placeholder)

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

  // CLASSNAME
  const classname = (type: string) => {
    switch (type) {
      case 'outlined':
        if (open) {
          return `vl-select-outlined ${icon ? '' : 'arrow-icon vl-select-outlined-opened'}`
        }
        return [`vl-select-outlined ${icon ? '' : 'arrow-icon'}`, activeOpt !== placeholder ? 'vl-select-outlined-selected' : ''].join(' ')
      case 'standard':
        if (open) {
          return 'vl-select-standard border-solid border-b-2 border-vl_grey-700'
        }
        return 'vl-select-standard'
      default:
        return
    }
  }

  const Select = (type: string) => (
    <div className={[classname(type), disabled ? 'disabled' : '', classNameSelect].join(' ')} onClick={onClickSelect} ref={ref}>
      {activeOpt}
      {icon && <div className='select-box__icon'>{icon}</div>}
    </div>
  )

  const placementHandler = () => {
    if (open) {
      switch (placement) {
        case 'top':
          return '-top-full'
        default:
          return variant === 'outlined' ? 'top-20' : 'top-[70px]'
      }
    }

    return ''
  }

  return (
    <div className={['select-box', className].join(' ')}>
      {/* OPTIONS DROPDOWN */}
      <div className={['options-container', placementHandler(), `${open ? 'active' : ''}`].join(' ')}>
        <OptionSelect options={options} onClickOption={onClickOption} refProp={optEl} />
      </div>

      {/* LABEL TEXT */}
      {labelText && <label className={['select-box__labelText text-xs font-medium pb-2', labelStyle].join(' ')}>{labelText}</label>}

      {/* FORM SELECT */}
      <StyledSelect>
        {variant === 'outlined' && Select(variant)}
        {variant === 'standard' && Select(variant)}
      </StyledSelect>
    </div>
  )
}

export default Select
