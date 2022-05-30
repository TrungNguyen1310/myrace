import React, { ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button'
import { ROUTES } from 'routes'
import AppMenu from '../AppMenu'
import Logo from 'assets/images/Logo.svg'

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
  const navigate = useNavigate()

  const LandingMenu = () => {
    return (
      <div className='text-vl_grey-600'>
        <Link to={ROUTES.HOME} className='text-base'>
          Home
        </Link>
        <Link to={ROUTES.GAMEPLAY} className='px-[29px] text-base'>
          Gameplay
        </Link>
        <Link to={ROUTES.NFTS_SYSTEM} className='px-[29px] text-base'>
          NFTs system
        </Link>
        <Link to={ROUTES.ROADMAP} className='px-[29px] text-base'>
          Roadmap / Team / White paper
        </Link>
        <Button className='bg-vl_neon ml-[37px] w-[98px]'>dApp</Button>
        <Button
          customprops={{
            border: true
          }}
          className='ml-[6px] w-[98px]'
          onClick={() => navigate(ROUTES.SIGNIN)}
        >
          Sign In
        </Button>
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
