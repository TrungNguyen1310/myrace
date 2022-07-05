import React from 'react'
import UserMenu from '../UserMenu'
import Logo from 'assets/images/Logo.svg'

interface INavbarDesktopProps {
  onToggleSideMenu?: () => void
}

const NavbarDesktop: React.FC<INavbarDesktopProps> = ({ onToggleSideMenu = () => undefined }) => {
  return (
    <div className='h-full w-full flex items-center justify-between'>
      <div className='flex items-center justify-center'>
        <img onClick={onToggleSideMenu} src={Logo} className='cursor-pointer' alt='Logo' />
        <span className='text-base font-bold text-vl_black dark:text-vl_white pl-[9px]'>MyRace</span>
      </div>

      <UserMenu />
    </div>
  )
}

export default NavbarDesktop
