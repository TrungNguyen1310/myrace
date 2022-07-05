import React from 'react'
import NavbarDesktop from './Desktop'
import NavbarMobile from './Mobile'

interface INavbarProps {
  toggleSideMenu?: () => void
}

const UserNavbar: React.FC<INavbarProps> = ({ toggleSideMenu = () => undefined }) => {
  const onToggleSideMenu = () => {
    toggleSideMenu()
  }
  return (
    <>
      <div className='h-full w-full lg:hidden block'>
        <NavbarMobile />
      </div>
      <div className='h-full w-full lg:block hidden'>
        <NavbarDesktop onToggleSideMenu={onToggleSideMenu} />
      </div>
    </>
  )
}

export default UserNavbar
