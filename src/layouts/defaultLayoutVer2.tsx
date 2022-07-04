import React, { ReactNode } from 'react'
import { Layout } from 'antd'
import ClientNavbar from 'components/NavbarVer2/Client'
import Footer from 'components/Footer'
import './style.scss'

const { Header, Footer: AntFooter, Content } = Layout

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children = null }) => {
  return (
    <Layout className='bg-transparent w-full min-h-screen'>
      <Header className='bg-vl_white dark:bg-vl_black shadow-primary_100 w-full h-[84px] default-header'>
        <ClientNavbar />
      </Header>
      <Content>{children}</Content>
      <AntFooter className='p-0'>
        <Footer />
      </AntFooter>
    </Layout>
  )
}

export default DefaultLayout
