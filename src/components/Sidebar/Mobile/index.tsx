import React, { useContext, useState } from 'react'

// import MobileMenu from '../MobileMenu'
import { IMenuItem, sideMenu } from 'utils/menuList'
import { ThemeContext } from 'context/ThemeContext'
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg'
import '../style.scss'
import Button from 'components/Button'

interface ISidebarMobile {
  activeMenu: number
  onClickMenu: (menu: IMenuItem) => void
}

const SidebarMobile: React.FC<ISidebarMobile> = ({ activeMenu = 0, onClickMenu = () => undefined }) => {
  const [theme] = useContext(ThemeContext)
  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false)

  const className = () => {
    return theme === 'dark' ? 'dark-active-menu-mobile' : 'active-menu-mobile'
  }

  const toggleAppBarMobile = (value: boolean) => {
    setOpenMenuMobile(value)
  }

  return (
    <>
      <div className={`${openMenuMobile ? 'opacity-0' : 'opacity-1'} w-full border-solid border-t border-[#CFDBD599] bg-white dark:bg-black duration-300`}>
        <ul className='w-auto flex justify-between items-center px-[11px] h-[76px]'>
          {sideMenu.slice(0, 4).map(menu => (
            <li key={menu.id} className='h-auto w-[56px] flex justify-center m-auto'>
              <Button shape='circle' onClick={() => onClickMenu(menu)} className={`${activeMenu === menu.id ? className() : ''}`}>
                <div>{menu.icon}</div>
              </Button>
            </li>
          ))}
          <li className='h-auto w-[56px] flex justify-center m-auto'>
            <Button shape='circle' onClick={() => toggleAppBarMobile(!openMenuMobile)}>
              <MenuIcon />
            </Button>
          </li>
        </ul>
      </div>
      {/* {openMenuMobile && <MobileMenu toggleDrawer={toggleAppBarMobile} open={openMenuMobile} />} */}
    </>
  )
}

export default SidebarMobile
