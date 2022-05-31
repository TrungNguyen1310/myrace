import React, { ReactNode } from 'react'
import AppMenu from './AppMenu'
import LandingMenu from './LandingMenu'
import Logo from 'assets/images/Logo.svg'

const isAuth = ''
interface INavbarProps {
  toggleAppBar?: (open: boolean) => void
  open?: boolean
  children?: ReactNode
}

const Navbar: React.FC<INavbarProps> = ({ toggleAppBar = () => undefined, open = false, children = null }) => {
  return (
    <nav className='bg-white shadow-primary_100 duration-300 dark:bg-black px-8 fixed z-[100] w-full h-[84px] flex'>
      <div className={`flex flex-wrap items-center w-full md:justify-between ${isAuth ? 'justify-end' : 'justify-center'}`}>
        <div className='hidden cursor-pointer md:flex md:items-center' onClick={() => toggleAppBar(!open)}>
          <img src={Logo} className='pr-[9px]' alt='Logo' />
          {children}
        </div>

        {isAuth ? <AppMenu /> : <LandingMenu />}
      </div>
    </nav>
  )
}

export default Navbar
