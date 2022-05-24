import React, { useContext, useState } from 'react'
import { IconButton, SelectChangeEvent } from '@mui/material'
import { MenuItem, Select } from '@mui/material'
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrowdown.svg'
import { ReactComponent as EarthIcon } from '../../assets/icons/earth.svg'
import { ReactComponent as MoonIcon } from '../../assets/icons/moon.svg'
import { ThemeContext } from '../../context/ThemeContext'
import './style.scss'

const Footer: React.FC = () => {
  const [currency, setCurrency] = useState<string>('1')
  const [language, setLanguage] = useState<string>('1')
  const [theme, setTheme] = useContext(ThemeContext)

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const onChangeSelect = (e: SelectChangeEvent<string>, type: string) => {
    if (type === 'currency') {
      setCurrency(e.target.value)
    } else {
      setLanguage(e.target.value)
    }
  }

  return (
    <footer className='w-full h-[86px] max-h-[86px] hidden px-8 bg-vl_white_1 absolute z-20 dark:bg-black md:flex items-center justify-between'>
      {/* ======= LEFT ======= */}
      <div className='flex items-center justify-between'>
        <p className='text-right-footer pr-[22px] dark:text-white'>Privacy Policy</p>
        <p className='text-right-footer pr-[22px] dark:text-white'>License</p>
        <p className='text-right-footer pr-[22px] dark:text-white'>API</p>
        <p className='text-right-footer'>© 2021 All rights reserved</p>
      </div>
      {/* ======= RIGHT ======= */}
      <div className='flex items-center justify-between relative'>
        <Select
          variant='standard'
          disableUnderline
          value={currency}
          onChange={e => onChangeSelect(e, 'currency')}
          className={`selectInput dark:text-white ${theme === 'dark' && 'darkmode'}`}
          IconComponent={() => <ArrowDownIcon />}
          MenuProps={{ disableScrollLock: true }}
        >
          <MenuItem value='1'>Currency - USD</MenuItem>
          <MenuItem value='2'>Currency - VND</MenuItem>
        </Select>
        <Select
          variant='standard'
          disableUnderline
          value={language}
          onChange={e => onChangeSelect(e, 'language')}
          className={`selectInput px-[17px] dark:text-white ${theme === 'dark' && 'darkmode'}`}
          IconComponent={() => <EarthIcon className='w-4' />}
          MenuProps={{ disableScrollLock: true }}
        >
          <MenuItem value='1'>English</MenuItem>
          <MenuItem value='2'>French</MenuItem>
        </Select>
        <IconButton
          onClick={toggleDarkMode}
          className={`${
            theme === 'dark' && 'darkmode'
          } border-solid border border-vl_gray w-[46px] h-[46px]`}
        >
          <MoonIcon />
        </IconButton>
      </div>
    </footer>
  )
}

export default Footer
