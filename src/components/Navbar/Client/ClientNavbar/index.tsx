import React, { ReactNode } from 'react'
import ClientMenu from '../ClientMenu'
import Logo from 'assets/images/Logo.svg'

interface INavbarProps {
  toggleAppBar?: (open: boolean) => void
  open?: boolean
  children?: ReactNode
}

const LandingNavbar: React.FC<INavbarProps> = ({ toggleAppBar = () => undefined, open = false, children = null }) => {
  return (
    <nav className='bg-white shadow-primary_100 duration-300 dark:bg-black px-8 fixed z-[100] w-full h-[84px] flex'>
      <div className='flex flex-wrap items-center w-full lg:justify-between justify-center'>
        <div className='hidden cursor-pointer lg:flex lg:items-center' onClick={() => toggleAppBar(!open)}>
          <img src={Logo} className='pr-[9px]' alt='Logo' />
          {children}
        </div>

        <ClientMenu />
      </div>
    </nav>
  )
}

export default LandingNavbar
