import React from 'react'
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg'
import { ReactComponent as AddIcon } from 'assets/icons/add-icon.svg'
import { ReactComponent as UserIcon } from 'assets/icons/user-icon.svg'
import Logo from 'assets/images/Logo.svg'
import './style.scss'

const ViewMobile: React.FC = () => {
  const rightSection = () => {
    return (
      <ul className='h-auto w-auto flex justify-between items-center'>
        <li className='flex justify-center items-center'>
          <div className='dark:user-icon p-[11px] rounded-full border-solid border border-vl_grey-700'>
            <UserIcon />
          </div>
        </li>
      </ul>
    )
  }

  const leftSection = () => {
    return (
      <ul className='h-auto w-auto flex justify-between items-center'>
        <li className='pr-[8px] flex justify-center items-center'>
          <div className='menu-icon dark:dark-menu-icon p-0'>
            <MenuIcon />
          </div>
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
