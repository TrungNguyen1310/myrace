import React from 'react'
import { Avatar, Dropdown, Menu } from 'antd'
import AvatarImg from 'assets/images/avatar.png'
import { sideMenu } from 'utils/menuList'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useNavigateHook } from 'hooks/useNavigate'

import './style.scss'

const NavbarMobile = () => {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const [navigate] = useNavigateHook()

  const getCurrentRoute = () => {
    const getCurrentMenu = sideMenu.find(menu => menu.path === pathname)
    return t(getCurrentMenu?.name || '')
  }

  const menu = () => {
    return (
      <Menu
        items={sideMenu.map(item => {
          return {
            label: <p onClick={() => navigate(item.path)}>{t(item.name)}</p>,
            key: item.id
          }
        })}
        className='w-[200px] p-2 nav-menu-mobile'
      />
    )
  }

  return (
    <div className='w-full h-full flex items-center justify-between'>
      <div className='action-btn' />
      <div className='nav-mobile-tile dark:text-vl_white text-vl_black text-[20px] leading-7 font-extrabold'>{getCurrentRoute()}</div>

      <Dropdown overlay={menu()} trigger={['click']}>
        <Avatar className='w-10 h-10 cursor-pointer' src={AvatarImg} />
      </Dropdown>
    </div>
  )
}

export default NavbarMobile
