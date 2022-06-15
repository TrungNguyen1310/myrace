/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { styled } from '@mui/material/styles'
import './style.scss'

interface ICheckbox {
  // Require
  onChange: any
  // Optional
  label?: string
  className?: string
  classNameCheckbox?: string
  checked?: boolean // => for single checkbox
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

const VlCheckbox: React.FC<ICheckbox> = ({ className, classNameCheckbox, label, checked, darkMode = true, onChange, ...props }) => {
  // const GroupCheckbox = () => {
  //   const onChecked = (val: string) => {
  //     return arrayChecked?.includes(val)
  //   }

  //   const labelStyle = (val: string) => {
  //     const checked = arrayChecked?.includes(val)

  //     // if darkMode: ON
  //     if (darkMode) return `${checked ? 'dark:text-vl_white text-vl_black' : 'dark:text-vl_white-100 text-vl_black-100'}`

  //     return `${checked ? 'text-vl_black' : 'text-vl_black-100'}`
  //   }

  //   return (
  //     <div>
  //       {listCheckboxes?.map(({ value, name, label: labelItem }, index) => (
  //         <FormControlLabel
  //           key={`checkbox-${index}`}
  //           sx={{
  //             marginRight: 0
  //           }}
  //           control={
  //             <Checkbox
  //               sx={{
  //                 '&:hover': { bgcolor: 'transparent' },
  //                 padding: '10px'
  //               }}
  //               disableRipple
  //               checkedIcon={<BpCheckedIcon />}
  //               icon={<BpIcon className='bp-icon' />}
  //               {...props}
  //               name={name}
  //               value={value}
  //               checked={onChecked(value)}
  //               onChange={onChange}
  //               className={[classNameCheckbox].join(' ')}
  //             />
  //           }
  //           label={labelItem}
  //           className={[labelStyle(value), className, 'font-bold text-xs'].join(' ')}
  //         />
  //       ))}
  //     </div>
  //   )
  // }

  const labelStyle = () => {
    // if darkMode: ON
    if (darkMode) return `${checked ? 'dark:text-vl_white text-vl_black' : 'dark:text-vl_white-100 text-vl_black-100'}`

    return `${checked ? 'text-vl_black' : 'text-vl_black-100'}`
  }

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
            icon={<BpIcon className='bp-icon' />}
            {...props}
            checked={checked}
            onChange={onChange}
            className={[classNameCheckbox].join(' ')}
          />
        }
        label={label}
        className={[labelStyle(), className, 'font-bold text-xs'].join(' ')}
      />
    </FormGroup>
  )
}

export default VlCheckbox
