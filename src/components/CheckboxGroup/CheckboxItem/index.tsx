/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'
import { styled } from '@mui/material/styles'

interface ICheckboxItem {
  checkboxLabel: string
  checkboxValue: string
  checked: boolean
  checkboxChangeCallback?: any
  darkMode: boolean
  className?: string
  classNameFormCheckbox?: string
  labelStyleActive?: string
  labelStyleInActive?: string
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

const CheckboxItem: React.FC<ICheckboxItem> = ({
  checkboxLabel,
  checkboxValue,
  checked,
  checkboxChangeCallback = () => undefined,
  darkMode = true,
  className,
  classNameFormCheckbox,
  labelStyleActive,
  labelStyleInActive
}) => {
  const labelColor = () => {
    // if darkMode: ON
    if (darkMode) {
      if (checked) {
        return labelStyleActive ? labelStyleActive : 'dark:text-vl_white text-vl_black'
      } else {
        return labelStyleInActive ? labelStyleInActive : 'dark:text-vl_white-100 text-vl_black-100'
      }
    }

    return `${checked ? 'text-vl_black' : 'text-vl_black-100'}`
  }

  const handleCheckboxChange = e => {
    checkboxChangeCallback(e.target.checked)
  }

  return (
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
          checked={checked}
          onChange={handleCheckboxChange}
          value={checkboxValue}
          className={[className].join(' ')}
        />
      }
      label={<div className={['font-bold text-xs', labelColor(), className].join(' ')}>{checkboxLabel}</div>}
      className={[classNameFormCheckbox].join(' ')}
    />
  )
}

export default CheckboxItem
