import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from 'routes'
import Button from 'components/Button'

const LandingMenu: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className='text-vl_grey-600'>
      <Link to={ROUTES.HOME} className='pr-[18px] xl:pr-[29px] text-sm xl:text-base font-bold'>
        Home
      </Link>
      <Link to={ROUTES.GAMEPLAY} className='pr-[18px] xl:pr-[29px] text-sm xl:text-base font-bold'>
        Gameplay
      </Link>
      <Link
        to={ROUTES.NFTS_SYSTEM}
        className='pr-[18px] xl:pr-[29px] text-sm xl:text-base font-bold'
      >
        NFTs system
      </Link>
      <Link to={ROUTES.ROADMAP} className='text-sm xl:text-base font-bold'>
        Roadmap / Team / White paper
      </Link>
      <Button className='bg-vl_neon ml-[12px] xl:ml-[37px] w-[98px]'>dApp</Button>
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

export default LandingMenu
