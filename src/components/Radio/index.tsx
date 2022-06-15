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
  primary?: boolean
  darkMode?: boolean
  className?: string
  radioClassName?: string
  labelStyleActive?: string
  labelStyleInActive?: string
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

const VlRadio: React.FC<IRadio> = ({ className, radioClassName, labelStyleActive, labelStyleInActive, listRadio, value, onChangeRadio, primary = false, darkMode = true, ...props }) => {
  const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
    backgroundColor: primary ? theme.palette.color.primary.primary_blue : theme.palette.color.secondary.secondary_pink,
    '&:before': {
      display: 'block',
      width: 20,
      height: 20,
      backgroundImage: `radial-gradient(${theme.palette.color.vl_white.DEFAULT},${theme.palette.color.vl_white.DEFAULT} 24%,transparent 34%)`,
      content: '""'
    },
    'input:hover ~ &': {
      backgroundColor: primary ? theme.palette.color.primary.primary_blue : theme.palette.color.secondary.secondary_pink
    }
  }))

  const labelStyle = (radioVal: string) => {
    if (darkMode) {
      if (value === radioVal) {
        return labelStyleActive ? labelStyleActive : 'text-vl_black dark:text-vl_white'
      }
      return labelStyleInActive ? labelStyleInActive : 'text-vl_black-100 dark:text-vl_white-100'
    }

    return value === radioVal ? 'text-vl_black' : 'text-vl_black-100'
  }

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
                checkedIcon={<BpCheckedIcon className={darkMode ? 'bp-check-radio-icon' : ''} />}
                icon={<BpIcon className={darkMode ? 'bp-radio-icon' : ''} />}
                className={[radioClassName].join(' ')}
              />
            }
            label={label}
            className={['label-radio', labelStyle(radioVal)].join(' ')}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

export default VlRadio
