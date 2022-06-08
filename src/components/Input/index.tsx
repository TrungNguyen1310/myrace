/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react'
import { styled } from '@mui/material/styles'
import { FormControl, TextField, InputLabel } from '@mui/material'
import { ThemeContext } from 'context/ThemeContext'
import './style.scss'

interface IInput {
  value: string | number | boolean | null | undefined
  onChange: any
  label?: string
  placeholder?: string
  className?: string
  disabled?: boolean
  variant?: 'standard' | 'outlined' | undefined // remove 'filled' value
}

const InputStyled = styled(TextField)(({ theme }) => ({
  '.MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '.MuiInput-input': {
    padding: 0,
    paddingBottom: '15px',
    height: 'auto'
  },
  '.MuiOutlinedInput-input': {
    padding: '0 20px'
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused': {
      borderColor: theme.palette.color.vl_grey[700],
      transition: 'all .2s ease-in-out'
    }
  },
  '.MuiInput-root:before': {
    borderBottom: `1px solid ${theme.palette.color.vl_grey[600]}`,
    bottom: '6px'
  },
  '.MuiInput-root:hover:before': {
    borderBottom: `1px solid ${theme.palette.color.vl_grey[700]}`,
    bottom: '6px'
  },
  '.MuiInput-root:after': {
    borderBottom: `1px solid ${theme.palette.color.vl_grey[700]}`,
    bottom: '6px'
  }
}))

const InputLabelStyle = styled(InputLabel)(() => ({
  position: 'relative',
  transform: 'initial'
}))

const VlInput: React.FC<IInput> = ({ className, label = '', placeholder = '', value, onChange, ...props }) => {
  const [theme] = useContext(ThemeContext)
  const baseStyle = `vl-input dark:text-white h-[48px] rounded-[24px] ${theme === 'dark' && 'darkmode'}`
  const borderStyle = `${props.variant === 'standard' ? '' : 'border-solid border border-vl_grey-600'}`

  return (
    <FormControl>
      {label && (
        <InputLabelStyle focused={false} htmlFor='my-input' className='text-xs font-medium text-black dark:text-white not-italic'>
          {label}
        </InputLabelStyle>
      )}
      <InputStyled
        {...props}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        InputProps={{
          className: [baseStyle, borderStyle, className].join(' ')
        }}
      />
    </FormControl>
  )
}

export default VlInput
