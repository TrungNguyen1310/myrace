/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'
import { styled } from '@mui/material/styles'

interface ICheckboxItem {
  checkboxLabel: string
  checkboxValue: string
  checked: boolean
  checkboxChangeCallback?: any
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

const CheckboxItem: React.FC<ICheckboxItem> = ({ checkboxLabel, checkboxValue, checked, checkboxChangeCallback = () => undefined }) => {
  const handleCheckboxChange = e => {
    checkboxChangeCallback(e.target.checked)
  }

  return (
    <FormControlLabel
      sx={{
        marginRight: 0
      }}
      control={
        <Checkbox
          sx={{
            '&:hover': { bgcolor: 'transparent' },
            padding: '10px'
          }}
          disableRipple
          checkedIcon={<BpCheckedIcon />}
          icon={<BpIcon className='bp-icon' />}
          checked={checked}
          onChange={handleCheckboxChange}
          value={checkboxValue}
        />
      }
      label={checkboxLabel}
    />
  )
}

export default CheckboxItem
