import React, { useEffect, useState, useTransition } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ViewMobile from 'components/Navbar/Client/ClientMenu/Mobile'
import ViewMenuDesktop from 'components/Navbar/Client/ClientMenu/Desktop'
import { useLocation, useNavigate } from 'react-router-dom'
import { IListMenu, listLandingMenu } from 'utils/sideMenu'

const LandingMenu: React.FC = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [pending, startTransition] = useTransition()
  const [activeMenu, setActiveMenu] = useState<number>(1)
  const mobileScreen = useMediaQuery(theme.breakpoints.down('lg')) // min-width: 768px

  useEffect(() => {
    setActiveMenuByCurrentRoute()
  }, [])

  const setActiveMenuByCurrentRoute = () => {
    const getCurrentMenu = listLandingMenu.find(menu => menu.path === pathname)
    if (getCurrentMenu) {
      setActiveMenu(getCurrentMenu.id)
    } else {
      setActiveMenu(0)
    }
  }

  const onClickMenu = (menu: IListMenu) => {
    startTransition(() => {
      setActiveMenu(menu.id)
      navigate(menu.path)
    })
  }

  return <>{mobileScreen ? <ViewMobile /> : <ViewMenuDesktop onClickMenu={onClickMenu} activeMenu={activeMenu} />}</>
}

export default LandingMenu
