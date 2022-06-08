/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useContext } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ThemeContext } from 'context/ThemeContext'
import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrowdown.svg'

import './style.scss'

interface ISelect {
  children: ReactNode
  label?: string
  placeholder?: string
  className?: string
  value: string | number | boolean | null | undefined
  onChange: any
  icon?: any
  sx?: any
  disabled?: boolean
  disableUnderline?: boolean
  variant?: 'standard' | 'outlined' | undefined // remove 'filled' value
}

const SelectStyle = styled(Select)(() => ({
  '& .MuiSelect-select:focus': {
    background: 'transparent'
  },
  // '& .MuiSelect-select': {
  //   paddingLeft: variant === 'standard' ? '20px' : 0
  // },
  '.MuiOutlinedInput-notchedOutline': {
    border: '1px solid #E8E8E8'
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #E8E8E8'
  },
  '&.MuiInput-root': {
    marginTop: 0
  },
  '&.MuiInput-underline:before': {
    borderBottom: '1px solid #E8E8E8'
  },
  '&.MuiInput-underline:hover:before': {
    borderBottom: '1px solid #E8E8E8'
  },
  '&.MuiInput-underline:after': {
    borderBottom: '1px solid #6B6B6B'
  }
}))

const InputLabelStyle = styled(InputLabel)(() => ({
  position: 'relative',
  transform: 'initial',
  fontSize: '12px',
  lineHeight: 'initial',
  paddingBottom: '8px'
}))

const VlSelect: React.FC<ISelect> = ({ children, label = '', className, value, placeholder = '', onChange, icon = <ArrowDownIcon />, ...props }) => {
  const [theme] = useContext(ThemeContext)
  const baseStyle = `footer-select dark:text-white h-[48px] rounded-[24px] ${theme === 'dark' && 'darkmode'}`

  return (
    <FormControl>
      {label && (
        <InputLabelStyle focused={false} htmlFor='my-input' className='text-xs font-medium text-black not-italic'>
          {label}
        </InputLabelStyle>
      )}
      <SelectStyle
        {...props}
        sx={{
          '& .MuiSelect-select': {
            paddingRight: '0 !important'
          }
        }}
        value={value}
        onChange={onChange}
        MenuProps={{ disableScrollLock: true }}
        className={[baseStyle, className].join(' ')}
        IconComponent={() => <div className={`pr-[18px] ${props.variant === 'standard' ? 'hidden' : 'arrow-icon'}`}>{icon}</div>}
        displayEmpty
      >
        {!value && (
          <MenuItem value='' className={[!value && 'hidden'].join(' ')}>
            <div className='text-vl_grey-600 text-sm font-bold not-italic'>{placeholder}</div>
          </MenuItem>
        )}
        {children}
      </SelectStyle>
    </FormControl>
  )
}

export default VlSelect
