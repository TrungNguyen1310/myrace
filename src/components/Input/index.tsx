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
  '.MuiInputBase-input': {
    height: '100%'
  },
  '.MuiInput-input': {
    padding: 0,
    height: '100%'
  },
  '.MuiOutlinedInput-input': {
    padding: '0 20px'
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused': {
      borderColor: theme.palette.color.vl_grey[700],
      transition: 'all .15s ease-in-out',
      '&:hover': {
        borderColor: theme.palette.color.vl_grey[700]
      }
    },
    '&:hover': {
      borderColor: theme.palette.color.vl_grey[600]
    }
  },
  '.MuiInput-root:before': {
    border: `1px solid ${theme.palette.color.vl_grey[600]}`,
    height: 0
  },
  '.MuiInput-root:hover:before': {
    border: `1px solid ${theme.palette.color.vl_grey[600]}`
  },
  '.MuiInput-root:after': {
    border: `1px solid ${theme.palette.color.vl_grey[700]}`
  },
  '.MuiInput-root:hover:not(.Mui-disabled):before': {
    border: `1px solid ${theme.palette.color.vl_grey[600]}`
  }
}))

const InputLabelStyle = styled(InputLabel)(() => ({
  transform: 'initial'
}))

const VlInput: React.FC<IInput> = ({ className, label = '', placeholder = '', value, onChange, ...props }) => {
  const [theme] = useContext(ThemeContext)
  const baseStyle = `vl-input dark:text-white h-[48px] rounded-[24px] ${theme === 'dark' && 'darkmode'}`
  const borderStyle = `${props.variant === 'standard' ? '' : 'border-solid border border-vl_grey-600'}`
  const labelStyle = `${props.variant === 'standard' ? '-mt-2' : '-translate-y-full pb-2'}`

  return (
    <FormControl>
      {label && (
        <InputLabelStyle focused={false} htmlFor='my-input' className={`${labelStyle} absolute top-0 text-xs font-medium text-black dark:text-white not-italic`}>
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
