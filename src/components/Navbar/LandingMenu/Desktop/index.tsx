import React, { useTransition } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'routes'
import Button from 'components/Button'
import { IListMenu, listLandingMenu } from 'utils/sideMenu'

import '../style.scss'

interface MenuDesktopProps {
  onClickMenu: (menu: IListMenu) => void
  activeMenu: number
}

const ViewMenuDesktop: React.FC<MenuDesktopProps> = ({ activeMenu = 1, onClickMenu }) => {
  const navigate = useNavigate()
  const [pending, startTransition] = useTransition()
  const className1 = menu => {
    return `${menu.id !== listLandingMenu.length && 'pr-[18px] 2xl:pr-[26px]'}`
  }

  const className2 = menu => {
    return `${activeMenu === menu.id ? 'active-landing-menu' : 'landing-menu'}`
  }

  return (
    <ul className='text-vl_grey-600 dark:text-white flex items-center'>
      {listLandingMenu.map(menu => (
        <li key={menu.id}>
          <p onClick={() => onClickMenu(menu)} className={`${className1(menu)} ${className2(menu)} text-sm xl:text-base font-bold cursor-pointer`}>
            {menu.name}
          </p>
        </li>
      ))}
      <li>
        <Button className='bg-vl_neon ml-[12px] 2xl:ml-[37px] w-[98px] text-xs xl:text-sm hover:bg-lime-500'>dApp</Button>
      </li>
      <li>
        <Button
          customprops={{
            border: true
          }}
          className='ml-[6px] w-[98px] dark:text-white text-xs xl:text-sm'
          onClick={() =>
            startTransition(() => {
              navigate(ROUTES.SIGNIN)
            })
          }
        >
          Sign In
        </Button>
      </li>
    </ul>
  )
}

export default ViewMenuDesktop
