import React, { ReactNode } from 'react'

import ClientNavbar from 'components/Navbar/Client/ClientNavbar'
import AnimationLayouts from 'layouts/animationLayouts'
import ClientSearchbar from 'components/Navbar/Client/ClientSearchbar'
import Footer from 'components/Footer'

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children = null }) => {
  return (
    <>
      <div className='flex min-h-screen layout'>
        <ClientNavbar>
          <ClientSearchbar />
        </ClientNavbar>
        <div className={'flex-1 h-auto flex justify-start pt-[100px] duration-300'}>
          <AnimationLayouts>{children}</AnimationLayouts>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DefaultLayout
