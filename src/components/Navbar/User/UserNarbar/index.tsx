import React, { ReactNode } from 'react'
import UserMenu from '../UserMenu'
import Logo from 'assets/images/Logo.svg'

interface INavbarProps {
  toggleAppBar?: (open: boolean) => void
  open?: boolean
  children?: ReactNode
}

const UserNarbar: React.FC<INavbarProps> = ({ toggleAppBar = () => undefined, open = false, children = null }) => {
  return (
    <nav className='bg-white shadow-primary_100 duration-300 dark:bg-black px-8 fixed z-[100] w-full h-[84px] flex'>
      <div className='flex flex-wrap items-center w-full md:justify-between justify-end'>
        <div className='hidden cursor-pointer md:flex md:items-center' onClick={() => toggleAppBar(!open)}>
          <img src={Logo} className='pr-[9px]' alt='Logo' />
          {children}
        </div>

        <UserMenu />
      </div>
    </nav>
  )
}

export default UserNarbar
