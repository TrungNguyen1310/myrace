import React, { ReactNode, useState } from 'react'
import { Layout } from 'antd'

import Footer from 'components/Footer'
import SidebarMenu from 'components/Sidebar'
import UserNavbar from 'components/Navbar/User'

import './style.scss'

const { Header, Footer: AntFooter, Content } = Layout

interface IAuthLayoutProps {
  children: ReactNode
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onCollapse = (value: boolean) => {
    setCollapsed(value)
  }

  return (
    <Layout className='min-h-screen'>
      <Header style={{ position: 'fixed', zIndex: 100, width: '100%' }} className='bg-vl_white dark:bg-vl_black shadow-primary_100 w-full h-[84px] default-header'>
        <UserNavbar toggleSideMenu={() => setCollapsed(!collapsed)} />
      </Header>
      <Layout className='bg-transparent w-full min-h-screen'>
        <SidebarMenu collapsed={collapsed} onCollapse={onCollapse} />
        <Content className='mt-[84px]'>{children}</Content>
      </Layout>
      <AntFooter className='p-0'>
        <Footer />
      </AntFooter>
    </Layout>
  )
}

export default AuthLayout
