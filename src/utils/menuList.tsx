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
    name: 'components.sidebar.dashboard', // i18n
    icon: <DashboardIcon />,
    path: ROUTES.DASHBOARD
  },
  {
    id: 2,
    name: 'components.sidebar.inventory', // i18n
    icon: <InventoryIcon />,
    path: ROUTES.INVENTORY
  },
  {
    id: 3,
    name: 'components.sidebar.marketplace', // i18n
    icon: <MarketplaceIcon />,
    path: ROUTES.MARKETPLACE
  },
  {
    id: 4,
    name: 'components.sidebar.social', // i18n
    icon: <SocialIcon />,
    path: ROUTES.SOCIAL
  },
  {
    id: 5,
    name: 'components.sidebar.wallet', // i18n
    icon: <WalletIcon />,
    path: ROUTES.WALLET
  },
  {
    id: 6,
    name: 'components.sidebar.buy_token', // i18n
    icon: <BuyTokenIcon />,
    path: ROUTES.BUY_TOKEN
  },
  {
    id: 7,
    name: 'components.sidebar.rent_raffle', // i18n
    icon: <RentRaffleIcon />,
    path: ROUTES.RENT_RAFFLE
  },
  {
    id: 8,
    name: 'components.sidebar.setting', // i18n
    icon: <SettingIcon />,
    path: ROUTES.SETTING
  }
]

export const clientMenu: IMenuItem[] = [
  {
    id: 1,
    name: 'components.navbar.home', // i18n
    path: ROUTES.HOME
  },
  {
    id: 2,
    name: 'components.navbar.game_play', // i18n
    path: ROUTES.GAMEPLAY
  },
  {
    id: 3,
    name: 'components.navbar.nfts_system', // i18n
    path: ROUTES.NFTS_SYSTEM
  },
  {
    id: 4,
    name: 'components.navbar.roadmap', // i18n
    path: ROUTES.ROADMAP
  }
]
