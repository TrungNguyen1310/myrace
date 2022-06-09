/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { styled } from '@mui/material/styles'

interface ICheckbox {
  // Require
  checked: boolean
  onChange: any
  // Optional
  className?: string
  label?: string
  disabled?: boolean
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

const VlCheckbox: React.FC<ICheckbox> = ({ className, label, checked, onChange, ...props }) => {
  return (
    <FormGroup>
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
            icon={<BpIcon />}
            {...props}
            checked={checked}
            onChange={onChange}
            className={[className].join(' ')}
          />
        }
        label={label}
        className='text-vl_black-100 font-bold text-xs'
      />
    </FormGroup>
  )
}

export default VlCheckbox
