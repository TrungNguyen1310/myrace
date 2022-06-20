import React, { ReactNode } from 'react'

import ClientNavbar from 'components/Navbar/Client/ClientNavbar'
// import AnimationLayouts from 'layouts/animationLayouts'
// import ClientSearchbar from 'components/Navbar/Client/ClientSearchbar'
// import Footer from 'components/Footer'

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children = null }) => {
  return (
    <>
      <div className='flex min-h-screen layout'>
        <ClientNavbar />
        {/* <ClientSearchbar /> */}
        <div className={'h-auto pt-[100px] w-full'}>{children}</div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default DefaultLayout
