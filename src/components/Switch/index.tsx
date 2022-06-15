/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { FormControlLabel, FormGroup, styled, Switch } from '@mui/material'
import { SwitchProps } from '@mui/material/Switch'
import './style.scss'

interface ISwitch {
  // Require
  checked: boolean
  onChange: any
  // Optional
  label?: string
  className?: string
}

const SwitchStyled = styled((props: ISwitch | SwitchProps) => <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />)(({ theme }) => ({
  width: 40,
  height: 22,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 3,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.color.primary.primary_blue,
        opacity: 1,
        border: 0
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      },
      '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.color.vl_white.DEFAULT
      }
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.color.vl_grey[100]
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 16,
    height: 16,
    marginLeft: 1,
    backgroundColor: theme.palette.color.vl_black.DEFAULT
  },
  '& .MuiSwitch-track': {
    borderRadius: '12px',
    backgroundColor: theme.palette.color.vl_white.DEFAULT,
    border: `1px solid ${theme.palette.color.vl_grey[500]}`,
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    })
  }
}))

const VlSwitch: React.FC<ISwitch> = ({ label, className, checked, onChange, ...props }) => {
  const baseStyle = 'vl-switch'
  return (
    <FormGroup>
      <FormControlLabel control={<SwitchStyled {...props} className={[baseStyle, className].join(' ')} checked={checked} onChange={onChange} />} label={label} />
    </FormGroup>
  )
}

export default VlSwitch
