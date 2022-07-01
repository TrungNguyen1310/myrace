import React, { ReactNode, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ArrowIcon from 'assets/icons/arrowdown.svg'
import useOutsideClick from 'components/Select/util'
import OptionSelect from 'components/Select/Option'

import './style.scss'
import useWindowDimensions from 'hooks/useWindowDimensions'

interface ISelect {
  // REQUIRED
  options: { value: string; label: string }[]

  // OPTIONAL
  defaultValue?: string
  label?: string
  onChange?: (value: { value: string; label: string }) => void
  variant?: 'standard' | 'outlined'
  disabled?: boolean
  placeholder?: string
  placement?: 'default' | 'top'
  className?: string
  classNameSelect?: string
  labelStyle?: string
  icon?: string | ReactNode
}

const StyledSelect = styled.div`
  .vl-old-select-outlined.arrow-icon {
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

  .vl-old-select-outlined.selected {
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
  placement: placementProps = 'default'
}) => {
  const optEl = useRef<HTMLOptionElement[]>([])
  const optBox = useRef<HTMLDivElement>(null)
  const getDefaultValue = (val: string) => {
    const getOption = options.find(opt => opt.value === val)
    return getOption?.label || placeholder
  }
  const [open, setOpen] = useState<boolean>(false)
  const [placement, setPlacement] = useState<number>(80) // placement of dropdown menu => should be auto adjust the position if the select placed at the bottom of the screen
  const [activeOpt, setActiveOpt] = useState<string>(defaultValue ? getDefaultValue(defaultValue) : placeholder)
  const { height: innerHeight } = useWindowDimensions()

  //**************** Set Position Of The Dropdown Menu Based On Window Viewport ****************
  const setPositionDropdownMenuHandler = () => {
    const offsetHeightScreen = document.documentElement.offsetHeight
    const elementToTopViewport = optBox?.current?.getBoundingClientRect().top || 0

    if ((offsetHeightScreen - elementToTopViewport < 0 || innerHeight - elementToTopViewport < 0) && placementProps === 'top') {
      setPlacement(-100)
    }
  }

  useEffect(() => {
    setPositionDropdownMenuHandler()
  }, [])

  //**************** Handle Click Outside Select Component To Close The Dropdown Option Menu ****************
  const detectSelectEventMouse = () => {
    setTimeout(() => {
      setOpen(false)
    }, 40)
  }
  const ref = useOutsideClick(detectSelectEventMouse)

  //**************** Click The Option Menu Item ****************
  const onClickOption = (i: number) => {
    const getOption = options.find(opt => opt.value === optEl.current[i].value) || { value: '', label: '' }
    const label = getOption?.label || ''

    onChange(getOption)
    setOpen(false)
    setActiveOpt(label)
  }

  //**************** Click To Open The Select Form ****************
  const onClickSelect = () => {
    if (disabled) {
      setOpen(false)
    } else {
      setOpen(!open)
    }
  }

  //**************** Select Component ****************
  const Select = (type: string) => (
    <div className={[classname(type), disabled ? 'disabled' : '', classNameSelect].join(' ')} onClick={onClickSelect} ref={ref}>
      {activeOpt}
      {icon && <div className='select-box__icon'>{icon}</div>}
    </div>
  )

  // CLASSNAME
  const classname = (type: string) => {
    switch (type) {
      case 'outlined':
        if (open) {
          return `vl-old-select-outlined ${icon ? '' : 'arrow-icon vl-old-select-outlined-opened'}`
        }
        return [`vl-old-select-outlined ${icon ? '' : 'arrow-icon'}`, activeOpt !== placeholder ? 'vl-old-select-outlined-selected' : ''].join(' ')
      case 'standard':
        if (open) {
          return 'vl-old-select-standard border-solid border-b-2 border-vl_grey-700'
        }
        return 'vl-old-select-standard'
      default:
        return
    }
  }

  return (
    <div className={['select-box', className].join(' ')}>
      {/* OPTIONS DROPDOWN */}
      <div
        style={{
          top: `${placement}px`
        }}
        className={['options-container', `${open ? 'active' : ''}`].join(' ')}
        ref={optBox}
      >
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
