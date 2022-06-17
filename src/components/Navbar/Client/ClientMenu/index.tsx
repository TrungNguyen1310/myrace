import React, { useEffect, useState, useTransition } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IMenuItem, clientMenu } from 'utils/menuList'
import ViewMenuDesktop from './Desktop'
import ViewMobile from './Mobile'

const LandingMenu: React.FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [pending, startTransition] = useTransition()
  const [activeMenu, setActiveMenu] = useState<number>(1)

  useEffect(() => {
    setActiveMenuByCurrentRoute()
  }, [])

  const setActiveMenuByCurrentRoute = () => {
    const getCurrentMenu = clientMenu.find(menu => menu.path === pathname)
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

  return (
    <div className='lg:w-auto w-full'>
      <div className='lg:hidden block'>
        <ViewMobile />
      </div>
      <div className='lg:block hidden'>
        <ViewMenuDesktop onClickMenu={onClickMenu} activeMenu={activeMenu} />
      </div>
    </div>
  )
}

export default LandingMenu
