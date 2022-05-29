import React, { ReactNode } from 'react'
import Logo from 'assets/images/Logo.svg'
import AppMenu from '../AppMenu'
import { Link } from 'react-router-dom'

const isAuth = ''
interface INavbarProps {
  toggleAppBar?: (open: boolean) => void
  open?: boolean
  children?: ReactNode
}

const Navbar: React.FC<INavbarProps> = ({
  toggleAppBar = () => undefined,
  open = false,
  children = null
}) => {
  const LandingMenu = () => {
    return (
      <div className='text-vl_grey-600'>
        <Link to='/' className='text-base'>
          Home
        </Link>
        <Link to='/game-play' className='px-[29px] text-base'>
          Gameplay
        </Link>
        <Link to='/nfts-system' className='px-[29px] text-base'>
          NFTs system
        </Link>
        <Link to='/roadmap' className='px-[29px] text-base'>
          Roadmap / Team / White paper
        </Link>
      </div>
    )
  }

  return (
    <nav className='bg-white shadow-primary_100 duration-300 dark:bg-black px-8 fixed z-[100] w-full h-[84px] flex'>
      <div className='flex flex-wrap items-center justify-end w-full md:justify-between'>
        <div
          className='hidden cursor-pointer md:flex md:items-center'
          onClick={() => toggleAppBar(!open)}
        >
          <img src={Logo} className='pr-[9px]' alt='Logo' />
          {children}
        </div>

        {isAuth ? <AppMenu /> : <LandingMenu />}
      </div>
    </nav>
  )
}

export default Navbar
