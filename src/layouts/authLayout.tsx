import React, { ReactNode, useEffect, useState, useTransition } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { IMenuItem, sideMenu } from 'utils/menuList'
import UserNarbar from 'components/Navbar/User/UserNavbar'
import AnimationLayouts from 'layouts/animationLayouts'
import useMediaQuery from 'hooks/useMediaQuery'
import SidebarDesktop from 'components/Sidebar/Desktop'
import SidebarMobile from 'components/Sidebar/Mobile'
import './style.scss'

interface IAuthLayoutProps {
  children: ReactNode
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const mobileScreen = useMediaQuery('(max-width: 768px)')
  const [pending, startTransition] = useTransition()
  const [activeMenu, setActiveMenu] = useState<number>(1)
  const [openMenuDesktop, setOpenMenuDesktop] = useState<boolean>(false)

  useEffect(() => {
    setActiveMenuByCurrentRoute()
  }, [])

  const setActiveMenuByCurrentRoute = () => {
    const getCurrentMenu = sideMenu.find(menu => menu.path === pathname)
    if (getCurrentMenu) {
      setActiveMenu(getCurrentMenu.id)
    } else {
      setActiveMenu(0)
    }
  }

  const onClickMenu = (menu: IMenuItem) => {
    startTransition(() => {
      setActiveMenu(menu.id)
      navigate(menu.path)
    })
  }

  const toggleAppBarDesktop = (value: boolean) => {
    setOpenMenuDesktop(value)
  }

  const classname = () => {
    if (mobileScreen) {
      return ''
    }

    return openMenuDesktop ? 'p-[calc(5rem+12rem)]' : 'p-20'
  }

  return (
    <>
      <div className='flex min-h-screen layout'>
        <UserNarbar toggleAppBar={toggleAppBarDesktop} open={openMenuDesktop}>
          <span className='text-black font-bold text-base leading-6 dark:text-white'>MyRace</span>
        </UserNarbar>
        <SidebarDesktop open={openMenuDesktop} activeMenu={activeMenu} onClickMenu={onClickMenu} />
        <div className={['flex-1 h-auto flex justify-start pt-[100px] duration-300', classname()].join(' ')}>
          <AnimationLayouts>{children}</AnimationLayouts>
        </div>
      </div>
      {mobileScreen && <SidebarMobile activeMenu={activeMenu} onClickMenu={onClickMenu} />}
    </>
  )
}

export default AuthLayout
