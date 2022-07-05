import React, { ReactNode, useState } from 'react'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import Footer from 'components/Footer'
import { sideMenu } from 'utils/menuList'
import UserNavbar from 'components/Navbar/User'
import { useNavigateHook } from 'hooks/useNavigate'
import './style.scss'

const { Header, Footer: AntFooter, Content, Sider } = Layout

interface IAuthLayoutProps {
  children: ReactNode
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
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

  const [collapsed, setCollapsed] = useState<boolean>(false)
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
    <Layout className='min-h-screen'>
      <Header style={{ position: 'fixed', zIndex: 100, width: '100%' }} className='bg-vl_white dark:bg-vl_black shadow-primary_100 w-full h-[84px] default-header'>
        <UserNavbar toggleSideMenu={() => setCollapsed(!collapsed)} />
      </Header>
      <Layout className='bg-transparent w-full min-h-screen'>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          onCollapse={value => setCollapsed(value)}
          className={['vl-sider-menu mt-[84px]', collapsed ? 'vl-sider-menu-close' : 'vl-sider-menu-open'].join(' ')}
        >
          <div className={['flex flex-col justify-between fixed ml-[9px]', collapsed ? 'w-auto' : 'w-[248px]'].join(' ')}>
            <Menu theme='dark' onClick={onClickMenu} selectedKeys={[`${activeMenu}`]} mode='inline' items={sideMenuList()} />
          </div>
        </Sider>
        <Content className='mt-[84px]'>{children}</Content>
      </Layout>
      <AntFooter className='p-0'>
        <Footer />
      </AntFooter>
    </Layout>
  )
}

export default AuthLayout
