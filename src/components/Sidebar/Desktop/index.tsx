import React from 'react'
import { IMenuItem, sideMenu } from 'utils/menuList'
import '../style.scss'

interface ISidebarDesktop {
  open: boolean
  activeMenu: number
  onClickMenu: (menu: IMenuItem) => void
}

const SidebarDesktop: React.FC<ISidebarDesktop> = ({ open = false, activeMenu = 0, onClickMenu = () => undefined }) => {
  return (
    <aside className={`sidebarDesktop h-auto fixed px-[9px] pt-8 duration-300 z-10 dark:bg-black ${open ? 'w-[calc(18px+248px)]' : 'w-sidebarClose'} hidden md:block`} aria-label='Sidebar Desktop'>
      <div className='pt-[84px] rounded h-full'>
        <ul className='space-y-2'>
          {sideMenu.map(menu => (
            <li key={menu.id} className='h-[56px]'>
              <a onClick={() => onClickMenu(menu)} className={`${activeMenu === menu.id ? 'active-menu' : 'menu'} flex items-center justify-start p-[17px] h-full cursor-pointer`}>
                <div>{menu.icon}</div>
                <p className={`ml-3 whitespace-nowrap duration-300 font-bold menu-title ${open ? 'opacity-1 visible' : 'opacity-0 invisible'}`}>{menu.name}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default SidebarDesktop
