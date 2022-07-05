import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavbarDesktop from 'components/Navbar/Client/Desktop'
import NavbarMobile from 'components/Navbar/Client/Mobile'
import { clientMenu, IMenuItem } from 'utils/menuList'
import './style.scss'

const ClientNavbar = () => {
  const { pathname } = useLocation()
  const [activeMenu, setActiveMenu] = useState<number>(1)

  useEffect(() => {
    getCurrentRoute()
  }, [])

  const getCurrentRoute = () => {
    const getCurrentMenu = clientMenu.find(menu => menu.path === pathname)
    if (getCurrentMenu) {
      setActiveMenu(getCurrentMenu.id)
    } else {
      setActiveMenu(1)
    }
  }

  const onClickMenu = (menu: IMenuItem) => {
    setActiveMenu(menu.id)
  }

  return (
    <>
      <div className='h-full w-full lg:hidden block'>
        <NavbarMobile />
      </div>
      <div className='h-full w-full lg:block hidden'>
        <NavbarDesktop onClickMenu={onClickMenu} activeMenu={activeMenu} />
      </div>
    </>
  )
}

export default ClientNavbar
