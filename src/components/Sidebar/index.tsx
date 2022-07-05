import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { sideMenu } from 'utils/menuList'
import { useNavigateHook } from 'hooks/useNavigate'

const { Sider } = Layout

interface ISidebar {
  collapsed: boolean
  onCollapse: (value: boolean) => void
}

const SidebarMenu: React.FC<ISidebar> = ({ collapsed, onCollapse }) => {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const [navigate] = useNavigateHook()

  const getCurrentRoute = () => {
    const getCurrentMenu = sideMenu.find(menu => menu.path === pathname)
    if (getCurrentMenu) {
      return getCurrentMenu.id
    } else {
      return 1
    }
  }

  const [activeMenu, setActiveMenu] = useState<number>(getCurrentRoute())

  const onClickMenu: MenuProps['onClick'] = e => {
    const getMenuPath = sideMenu.find(menu => menu.id === +e.key) || sideMenu[1]
    const path = getMenuPath?.path || ''

    setActiveMenu(getMenuPath.id)
    navigate(path)
  }

  const sideMenuList = () => {
    return sideMenu.map(menu => {
      return {
        key: menu.id,
        label: t(menu.name),
        icon: menu.icon
      }
    })
  }

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={value => onCollapse(value)}
      className={['vl-sider-menu mt-[84px] lg:block hidden', collapsed ? 'vl-sider-menu-close' : 'vl-sider-menu-open'].join(' ')}
    >
      <div className={['flex flex-col justify-between fixed ml-[9px]', collapsed ? 'w-auto' : 'w-[248px]'].join(' ')}>
        <Menu theme='dark' onClick={onClickMenu} selectedKeys={[`${activeMenu}`]} mode='inline' items={sideMenuList()} />
      </div>
    </Sider>
  )
}

export default SidebarMenu
