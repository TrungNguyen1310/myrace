/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import { FormControl, TextField, InputLabel } from '@mui/material'
import './style.scss'

interface IInput {
  // REQUIRED
  value: string | number | boolean | null | undefined
  onChange: any
  // OPTIONAL
  type?: string
  label?: string
  labelStyle?: string
  placeholder?: string
  className?: string
  classNameInput?: string
  disabled?: boolean
  darkMode?: boolean
  variant?: 'standard' | 'outlined' | undefined // remove 'filled' value
  endAdornment?: ReactNode
  startAdornment?: ReactNode
}

const InputStyled = styled(TextField)<IInput>(({ theme }) => ({
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
    position: 'relative',
    '.MuiInputAdornment-root': {
      position: 'absolute',
      right: 0
    },
    paddingRight: 0,
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

const VlInput: React.FC<IInput> = ({
  className,
  classNameInput,
  type = 'text',
  label = '',
  labelStyle,
  placeholder = '',
  value,
  onChange,
  darkMode = true,
  endAdornment,
  startAdornment,
  ...props
}) => {
  const baseStyle = `vl-input ${darkMode ? 'dark:text-vl_white' : 'text-vl_black'} h-[48px] rounded-[24px]`
  const borderStyle = `${props.variant === 'standard' ? '' : 'border-solid border border-vl_grey-600'}`
  const labelstyle = `${props.variant === 'standard' ? '-mt-2' : '-translate-y-full pb-2'}`
  const labelDarkMode = () => {
    return darkMode ? (labelStyle ? labelStyle : 'dark:text-white') : ''
  }

  return (
    <FormControl className={className}>
      {label && (
        <InputLabelStyle focused={false} htmlFor='my-input' className={['absolute top-0 text-xs font-medium not-italic text-black', labelstyle, labelDarkMode()].join(' ')}>
          {label}
        </InputLabelStyle>
      )}
      <InputStyled
        {...props}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        InputProps={{
          className: [baseStyle, borderStyle, classNameInput].join(' '),
          endAdornment: endAdornment,
          startAdornment: startAdornment
        }}
      />
    </FormControl>
  )
}

export default VlInput
