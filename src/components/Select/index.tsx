/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrowdown.svg'

import './style.scss'

interface ISelect {
  // Required
  children: ReactNode
  value: string | number | boolean | null | undefined
  onChange: any
  // Optional
  label?: string
  labelStyle?: string
  placeholder?: string
  className?: string
  classNameWrapper?: string
  icon?: any
  sx?: any
  disabled?: boolean
  darkMode?: boolean
  disableUnderline?: boolean
  variant?: 'standard' | 'outlined' | undefined // remove 'filled' value
}

const SelectStyle = styled(Select)(({ theme }) => ({
  '& .MuiSelect-select:focus': {
    background: 'transparent'
  },
  '.MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '&.MuiInput-root': {
    marginTop: 0
  },
  '& .MuiSelect-select': {
    padding: 0,
    paddingRight: '0 !important'
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.color.vl_grey[600]}`
  },
  '&.MuiInput-underline:before': {
    border: `1px solid ${theme.palette.color.vl_grey[600]}`,
    height: 0
  },
  '&.MuiInput-underline:hover:before': {
    border: `1px solid ${theme.palette.color.vl_grey[600]}`
  },
  '&.MuiInput-underline:after': {
    border: `1px solid ${theme.palette.color.vl_grey[700]}`
  }
}))

const InputLabelStyle = styled(InputLabel)(({ theme }) => ({
  position: 'relative',
  transform: 'initial',
  fontSize: `${theme.palette.fontSize.xs}`,
  lineHeight: 'initial',
  paddingBottom: '8px'
}))

const VlSelect: React.FC<ISelect> = ({ children, label = '', className, classNameWrapper, value, placeholder = '', onChange, icon = <ArrowDownIcon />, darkMode = true, labelStyle, ...props }) => {
  const baseStyle = `vl-select ${darkMode ? 'dark:text-vl_white' : 'text-vl_black'} ${props.variant === 'standard' ? '' : 'pl-[20px]'} h-[48px] rounded-[24px] min-w-[100px]`
  const borderStyle = `${props.variant === 'standard' ? '' : 'border-solid border border-vl_grey-600'}`
  const labelstyle = `${props.variant === 'standard' ? 'absolute -top-2' : ''}`
  const labelDarkMode = () => {
    return darkMode ? (labelStyle ? labelStyle : 'dark:text-white') : ''
  }

  return (
    <FormControl className={classNameWrapper}>
      {label && (
        <InputLabelStyle focused={false} htmlFor='my-input' className={['text-xs font-medium not-italic text-black', labelstyle, labelDarkMode()].join(' ')}>
          {label}
        </InputLabelStyle>
      )}
      <SelectStyle
        {...props}
        value={value}
        onChange={onChange}
        MenuProps={{ disableScrollLock: true }}
        className={[baseStyle, borderStyle, className].join(' ')}
        IconComponent={() => <div className={`pr-[18px] ${props.variant === 'standard' ? 'hidden' : darkMode ? 'arrow-icon' : ''}`}>{icon}</div>} // ICON
        displayEmpty
      >
        {/* PLACEHOLDER */}
        {!value && (
          <MenuItem value='' className={[!value && 'hidden'].join(' ')}>
            <div className='text-vl_grey-700 text-sm font-bold not-italic'>{placeholder}</div>
          </MenuItem>
        )}

        {/* LIST MENU ITEMS */}
        {children}
      </SelectStyle>
    </FormControl>
  )
}

export default VlSelect
