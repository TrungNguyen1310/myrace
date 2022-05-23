import React, { ReactNode, useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useLocation, useNavigate } from 'react-router-dom'

import { IListMenu, listMenu } from '../utils/sideMenu'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SidebarMobile from '../components/Sidebar/Mobile'
import SidebarDesktop from '../components/Sidebar/Desktop'
import './style.scss'

interface IAuthLayoutProps {
  children: ReactNode
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
  const theme = useTheme()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const mobileScreen = useMediaQuery(theme.breakpoints.down('md')) // min-width: 768px
  const [activeMenu, setActiveMenu] = useState<number>(1)
  const [openMenuDesktop, setOpenMenuDesktop] = useState<boolean>(false)

  useEffect(() => {
    setActiveMenuByCurrentRoute()
  }, [])

  const setActiveMenuByCurrentRoute = () => {
    const getCurrentMenu = listMenu.find(menu => menu.path === pathname)
    if (getCurrentMenu) {
      setActiveMenu(getCurrentMenu.id)
    } else {
      setActiveMenu(0)
    }
  }

  const onClickMenu = (menu: IListMenu) => {
    setActiveMenu(menu.id)
    navigate(menu.path)
  }

  const toggleAppBarDesktop = (value: boolean) => {
    setOpenMenuDesktop(value)
  }

  const className = () => {
    if (mobileScreen) {
      return ''
    }

    return openMenuDesktop ? 'p-[calc(5rem+12rem)]' : 'p-20'
  }

  return (
    <>
      <div className='flex min-h-screen layout'>
        <Navbar toggleAppBar={toggleAppBarDesktop} open={openMenuDesktop}>
          <span className='text-black font-bold text-base leading-6 dark:text-white'>MyRace</span>
        </Navbar>
        <SidebarDesktop open={openMenuDesktop} activeMenu={activeMenu} onClickMenu={onClickMenu} />
        <div className={`flex-1 h-auto flex justify-start pt-[100px] duration-300 ${className()}`}>
          {children}
        </div>
      </div>
      {mobileScreen && <SidebarMobile activeMenu={activeMenu} onClickMenu={onClickMenu} />}
      <Footer />
    </>
  )
}

export default AuthLayout