import { ReactComponent as DashboardIcon } from '../assets/icons/dashboard.svg'
import { ReactComponent as InventoryIcon } from '../assets/icons/inventory.svg'
import { ReactComponent as MarketplaceIcon } from '../assets/icons/marketplace.svg'
import { ReactComponent as SocialIcon } from '../assets/icons/social.svg'
import { ReactComponent as WalletIcon } from '../assets/icons/wallet.svg'
import { ReactComponent as BuyTokenIcon } from '../assets/icons/dollar.svg'
import { ReactComponent as RentRaffleIcon } from '../assets/icons/rent.svg'
import { ReactComponent as SettingIcon } from '../assets/icons/setting.svg'
import { ReactNode } from 'react'

export interface IListMenu {
  id: number
  name: string
  icon: ReactNode
  path: string
}

export const listMenu: IListMenu[] = [
  {
    id: 1,
    name: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/dashboard'
  },
  {
    id: 2,
    name: 'Inventory',
    icon: <InventoryIcon />,
    path: '/inventory'
  },
  {
    id: 3,
    name: 'Marketplace',
    icon: <MarketplaceIcon />,
    path: '/marketplace'
  },
  {
    id: 4,
    name: 'Social',
    icon: <SocialIcon />,
    path: '/social'
  },
  {
    id: 5,
    name: 'Wallet',
    icon: <WalletIcon />,
    path: '/wallet'
  },
  {
    id: 6,
    name: 'Buy Token',
    icon: <BuyTokenIcon />,
    path: '/buy-token'
  },
  {
    id: 7,
    name: 'Rent/Raffle',
    icon: <RentRaffleIcon />,
    path: '/rent-raffle'
  },
  {
    id: 8,
    name: 'Setting',
    icon: <SettingIcon />,
    path: '/setting'
  }
]
