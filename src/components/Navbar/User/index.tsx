import React from 'react'
import Logo from 'assets/images/Logo.svg'
import UserMenu from './UserMenu'

interface INavbarProps {
  toggleSideMenu?: () => void
}

const UserNavbar: React.FC<INavbarProps> = ({ toggleSideMenu = () => undefined }) => {
  const onToggleSideMenu = () => {
    toggleSideMenu()
  }
  return (
    <div className='h-full w-full flex items-center justify-between'>
      <img onClick={onToggleSideMenu} src={Logo} className='cursor-pointer' alt='Logo' />
      <UserMenu />
    </div>
  )
}

export default UserNavbar
