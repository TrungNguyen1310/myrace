import React, { ReactNode, useState } from 'react'
import { Layout, Menu } from 'antd'
import Footer from 'components/Footer'
import './style.scss'
import UserNavbar from 'components/NavbarVer2/User'
import { sideMenu } from 'utils/menuList'
import { useTranslation } from 'react-i18next'

import './style.scss'

const { Header, Footer: AntFooter, Content, Sider } = Layout

interface IAuthLayoutProps {
  children: ReactNode
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState<boolean>(false)

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
            <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' items={sideMenuList()} />
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
