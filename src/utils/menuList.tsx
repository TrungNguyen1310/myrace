import { ReactNode } from 'react'
import { ReactComponent as DashboardIcon } from 'assets/icons/dashboard.svg'
import { ReactComponent as InventoryIcon } from 'assets/icons/inventory.svg'
import { ReactComponent as MarketplaceIcon } from 'assets/icons/marketplace.svg'
import { ReactComponent as SocialIcon } from 'assets/icons/social.svg'
import { ReactComponent as WalletIcon } from 'assets/icons/wallet.svg'
import { ReactComponent as BuyTokenIcon } from 'assets/icons/dollar.svg'
import { ReactComponent as RentRaffleIcon } from 'assets/icons/rent.svg'
import { ReactComponent as SettingIcon } from 'assets/icons/setting.svg'
import { ROUTES } from 'routes'

export interface IMenuItem {
  id: number
  name: string
  icon?: ReactNode
  path: string
}

export const sideMenu: IMenuItem[] = [
  {
    id: 1,
    name: 'Dashboard',
    icon: <DashboardIcon />,
    path: ROUTES.DASHBOARD
  },
  {
    id: 2,
    name: 'Inventory',
    icon: <InventoryIcon />,
    path: ROUTES.INVENTORY
  },
  {
    id: 3,
    name: 'Marketplace',
    icon: <MarketplaceIcon />,
    path: ROUTES.MARKETPLACE
  },
  {
    id: 4,
    name: 'Social',
    icon: <SocialIcon />,
    path: ROUTES.SOCIAL
  },
  {
    id: 5,
    name: 'Wallet',
    icon: <WalletIcon />,
    path: ROUTES.WALLET
  },
  {
    id: 6,
    name: 'Buy Token',
    icon: <BuyTokenIcon />,
    path: ROUTES.BUY_TOKEN
  },
  {
    id: 7,
    name: 'Rent/Raffle',
    icon: <RentRaffleIcon />,
    path: ROUTES.RENT_RAFFLE
  },
  {
    id: 8,
    name: 'Setting',
    icon: <SettingIcon />,
    path: ROUTES.SETTING
  }
]

export const clientMenu: IMenuItem[] = [
  {
    id: 1,
    name: 'Home',
    path: ROUTES.HOME
  },
  {
    id: 2,
    name: 'Gameplay',
    path: ROUTES.GAMEPLAY
  },
  {
    id: 3,
    name: 'NFTs system',
    path: ROUTES.NFTS_SYSTEM
  },
  {
    id: 4,
    name: 'Roadmap / Team / White paper',
    path: ROUTES.ROADMAP
  }
]
