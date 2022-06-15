/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { styled } from '@mui/material/styles'
import './style.scss'

interface ICheckbox {
  // Require
  onChange: any
  checked: boolean
  // Optional
  label?: string
  className?: string
  labelStyle?: string
  classNameCheckbox?: string
  disabled?: boolean
  darkMode?: boolean
}

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 4,
  width: 20,
  height: 20,
  backgroundColor: theme.palette.color.vl_grey[300],
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.color.vl_grey[600]
  }
}))

const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
  backgroundColor: theme.palette.color.primary.primary_blue,
  backgroundImage: 'url("./tick-icon.svg")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  '&:before': {
    display: 'block',
    width: 20,
    height: 20,
    backgroundImage: 'url("./tick-icon.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    content: '""'
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.color.primary.primary_blue
  },
  'input:disabled:hover ~ &': {
    background: theme.palette.color.vl_grey[600]
  }
}))

const VlCheckbox: React.FC<ICheckbox> = ({ className, classNameCheckbox, label, checked, darkMode = true, onChange, labelStyle, ...props }) => {
  const labelColor = () => {
    if (props.disabled) return 'text-vl_grey-600'
    // if darkMode: ON
    if (darkMode) return `${checked ? 'dark:text-vl_white text-vl_black' : 'dark:text-vl_white-100 text-vl_black-100'}`

    return `${checked ? 'text-vl_black' : 'text-vl_black-100'}`
  }

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              '&:hover': { bgcolor: 'transparent' },
              padding: '10px'
            }}
            disableRipple
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon className={darkMode ? 'bp-icon' : ''} />}
            {...props}
            checked={checked}
            onChange={onChange}
            className={[classNameCheckbox].join(' ')}
          />
        }
        label={<div className={[labelColor(), labelStyle, 'font-bold text-xs'].join(' ')}>{label}</div>}
        className={[className].join(' ')}
      />
    </FormGroup>
  )
}

export default VlCheckbox
