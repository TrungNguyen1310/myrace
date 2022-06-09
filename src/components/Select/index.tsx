/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useContext } from 'react'
import { styled } from '@mui/material/styles'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { ThemeContext } from 'context/ThemeContext'
import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrowdown.svg'

import './style.scss'

interface ISelect {
  // Required
  children: ReactNode
  value: string | number | boolean | null | undefined
  onChange: any
  // Optional
  label?: string
  placeholder?: string
  className?: string
  icon?: any
  sx?: any
  disabled?: boolean
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

const VlSelect: React.FC<ISelect> = ({ children, label = '', className, value, placeholder = '', onChange, icon = <ArrowDownIcon />, ...props }) => {
  const [theme] = useContext(ThemeContext)
  const baseStyle = `vl-select dark:text-white ${props.variant === 'standard' ? '' : 'pl-[20px]'} h-[48px] rounded-[24px] ${theme === 'dark' && 'darkmode'}`
  const borderStyle = `${props.variant === 'standard' ? '' : 'border-solid border border-vl_grey-600'}`
  const labelStyle = `${props.variant === 'standard' ? 'absolute -top-2' : ''}`

  return (
    <FormControl>
      {label && (
        <InputLabelStyle focused={false} htmlFor='my-input' className={`${labelStyle} text-xs font-medium text-black dark:text-white not-italic`}>
          {label}
        </InputLabelStyle>
      )}
      <SelectStyle
        {...props}
        value={value}
        onChange={onChange}
        MenuProps={{ disableScrollLock: true }}
        className={[baseStyle, borderStyle, className].join(' ')}
        IconComponent={() => <div className={`pr-[18px] ${props.variant === 'standard' ? 'hidden' : 'arrow-icon'}`}>{icon}</div>} // ICON
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
