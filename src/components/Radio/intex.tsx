/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { styled } from '@mui/material/styles'
import Radio from '@mui/material/Radio'
import { FormControl, FormControlLabel, RadioGroup } from '@mui/material'
import './style.scss'

interface IRadio {
  // Require
  value: boolean | number | string
  onChangeRadio: any
  listRadio: { value: string; label: string; disabled?: boolean }[]
  // Optional
  className?: string
  primary?: boolean
  radioClassName?: string
}

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 20,
  height: 20,
  backgroundColor: theme.palette.color.vl_grey[300],
  'input:hover ~ &': {
    backgroundColor: theme.palette.color.vl_grey[300]
  },
  'input:disabled:hover ~ &': {
    boxShadow: 'none',
    background: theme.palette.color.vl_grey[400]
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.color.vl_grey[400]
  }
}))

const BpCheckedIcon = styled(BpIcon)<{ primary: string }>(({ theme, primary }) => ({
  backgroundColor: primary === 'true' ? theme.palette.color.primary.primary_blue : theme.palette.color.secondary.secondary_pink,
  '&:before': {
    display: 'block',
    width: 20,
    height: 20,
    backgroundImage: `radial-gradient(${theme.palette.color.vl_white.DEFAULT},${theme.palette.color.vl_white.DEFAULT} 24%,transparent 34%)`,
    content: '""'
  },
  'input:hover ~ &': {
    backgroundColor: primary === 'true' ? theme.palette.color.primary.primary_blue : theme.palette.color.secondary.secondary_pink
  }
}))

const VlRadio: React.FC<IRadio> = ({ className, radioClassName, listRadio, value, onChangeRadio, primary = false, ...props }) => {
  return (
    <FormControl>
      <RadioGroup {...props} className={className} onChange={onChangeRadio} value={value}>
        {listRadio.map(({ value: radioVal, label, disabled = false }, index) => (
          <FormControlLabel
            key={index}
            value={radioVal}
            control={
              <Radio
                sx={{
                  '&:hover': {
                    bgcolor: 'transparent'
                  }
                }}
                disabled={disabled}
                disableRipple
                checkedIcon={<BpCheckedIcon className='bp-check-radio-icon' primary={primary.toString()} />}
                icon={<BpIcon className='bp-radio-icon' />}
                className={[radioClassName].join(' ')}
              />
            }
            label={label}
            className={`label-radio ${value === radioVal ? 'text-vl_black dark:text-vl_white' : 'text-vl_black-100 dark:text-vl_white-100'}`}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

export default VlRadio
