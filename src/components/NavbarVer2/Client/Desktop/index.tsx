import React, { useTransition } from 'react'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'routes'
import Button from 'components/Button'
import Logo from 'assets/images/Logo.svg'
import { clientMenu, IMenuItem } from 'utils/menuList'

interface INavbarDesktop {
  onClickMenu: (menu: IMenuItem) => void
  activeMenu: number
}

const NavbarDesktop: React.FC<INavbarDesktop> = ({ activeMenu, onClickMenu: onClickMenuProp }) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [pending, startTransition] = useTransition()

  const menuList = () => {
    return clientMenu.map(menu => {
      return {
        label: t(menu.name),
        key: menu.id
      }
    })
  }

  const onClickMenu: MenuProps['onClick'] = e => {
    const getMenuPath = clientMenu.find(menu => menu.id === +e.key) || clientMenu[1]
    const path = getMenuPath?.path || ''
    onClickMenuProp(getMenuPath)

    startTransition(() => {
      navigate(path)
    })
  }

  return (
    <div className='h-full w-full flex items-center justify-between'>
      <img src={Logo} className='pr-[9px]' alt='Logo' />
      <Menu onClick={onClickMenu} selectedKeys={[`${activeMenu}`]} mode='horizontal' items={menuList()} className='w-full justify-end bg-transparent border-b-0 navbar-menu' />
      <div className='flex items-center'>
        <Button className='ml-[12px] 2xl:ml-[37px] w-[98px] h-10 bg-vl_neon focus:bg-vl_neon hover:bg-lime-500 hover:text-vl_black focus:text-vl_black text-vl_black border-none'>dApp</Button>
        <Button
          className='ml-[6px] w-[98px] h-10'
          onClick={() =>
            startTransition(() => {
              navigate(ROUTES.SIGNIN)
            })
          }
        >
          {t('components.navbar.sign_in')}
        </Button>
      </div>
    </div>
  )
}

export default NavbarDesktop
