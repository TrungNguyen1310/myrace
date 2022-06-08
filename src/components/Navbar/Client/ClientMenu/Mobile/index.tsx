import React from 'react'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg'
import { ReactComponent as AddIcon } from 'assets/icons/add-icon.svg'
import { ReactComponent as UserIcon } from 'assets/icons/user-icon.svg'
import Logo from 'assets/images/Logo.svg'

import './style.scss'

const ViewMobile = () => {
  const rightSection = () => {
    return (
      <ul className='h-auto w-auto flex justify-between items-center'>
        <li className='pr-[20px] flex justify-center items-center'>
          <IconButton className='p-0 w-[18px] h-[18px] text-black dark:text-white'>
            <SearchIcon className='w-[18px] h-[18px]' />
          </IconButton>
        </li>
        <li className='pr-[20px] flex justify-center items-center'>
          <IconButton className='dark:add-icon p-0'>
            <AddIcon />
          </IconButton>
        </li>
        <li className='flex justify-center items-center'>
          <IconButton className='dark:user-icon p-[11px] border-solid border border-vl_grey-700'>
            <UserIcon />
          </IconButton>
        </li>
      </ul>
    )
  }

  const leftSection = () => {
    return (
      <ul className='h-auto w-auto flex justify-between items-center'>
        <li className='pr-[8px] flex justify-center items-center'>
          <IconButton className='menu-icon dark:dark-menu-icon p-0'>
            <MenuIcon />
          </IconButton>
        </li>
        <li className='pr-[8px] flex justify-center items-center'>
          <img src={Logo} className='' alt='Logo' />
        </li>
        <li className='flex justify-center items-center'>
          <h6 className='dark:text-white'>myRace.io</h6>
        </li>
      </ul>
    )
  }
  return (
    <div className='w-full flex items-center justify-between'>
      {leftSection()}
      {rightSection()}
    </div>
  )
}

export default ViewMobile
