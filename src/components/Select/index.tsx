/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useContext } from 'react'
import { Select } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ThemeContext } from 'context/ThemeContext'
import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrowdown.svg'

import './style.scss'

interface ISelect {
  children: ReactNode
  className?: string
  value: string | number | boolean
  onChange: any
  icon?: any
  sx?: any
  disabled?: boolean
  disableUnderline?: boolean
  variant?: 'standard' | 'outlined' | 'filled' | undefined
}

const SelectStyle = styled(Select)(() => ({
  '& .MuiSelect-select:focus': {
    background: 'transparent'
  },
  '& .MuiSelect-select': {
    paddingLeft: '20px'
  },
  '.MuiOutlinedInput-notchedOutline': {
    border: '1px solid #E8E8E8'
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #E8E8E8'
  }
}))

const VlSelect: React.FC<ISelect> = ({ children, className, value, onChange, icon = <ArrowDownIcon />, ...props }) => {
  const [theme] = useContext(ThemeContext)
  const baseStyle = `footer-select dark:text-white h-[48px] rounded-[24px] ${theme === 'dark' && 'darkmode'}`

  return (
    <SelectStyle
      {...props}
      sx={{
        '& .MuiSelect-select': {
          paddingRight: `${props.variant === 'standard' ? '6px !important' : '0'}`
        }
      }}
      MenuProps={{ disableScrollLock: true }}
      value={value}
      onChange={onChange}
      IconComponent={() => <div className={`pr-[18px] ${props.variant === 'standard' ? '' : 'arrow-icon'}`}>{icon}</div>}
      className={[baseStyle, className].join(' ')}
    >
      {children}
    </SelectStyle>
  )
}

export default VlSelect
