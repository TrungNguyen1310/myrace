import { ReactNode } from 'react'

import Dashboard from 'features/Dashboard'
import Inventory from 'features/Inventory'
import Marketplace from 'features/Marketplace'
import Social from 'features/Social'
import Wallet from 'features/Wallet'
import BuyToken from 'features/BuyToken'
import RentRaffle from 'features/RentRaffle'
import Setting from 'features/Setting'
import Demo from 'features/Demo'
import Home from 'features/Home'
import Gameplay from 'features/Gameplay'
import NFTSystem from 'features/NFTSystem'
import Roadmap from 'features/Roadmap'

interface IRouteItem {
  name: string
  element: ReactNode
  path: string
}

interface IRoutes {
  public: IRouteItem[]
  private: IRouteItem[]
}

export const ROUTES = {
  HOME: '/',
  SIGNIN: '/signin',
  GAMEPLAY: '/game-play',
  NFTS_SYSTEM: '/nfts-system',
  ROADMAP: '/roadmap',
  DEMO: '/demo',
  DASHBOARD: '/dashboard',
  INVENTORY: '/inventory',
  MARKETPLACE: '/marketplace',
  SOCIAL: '/social',
  WALLET: '/wallet',
  BUY_TOKEN: '/buy-token',
  RENT_RAFFLE: '/rent-raffle',
  SETTING: '/setting'
}

export const routes: IRoutes = {
  public: [
    {
      name: 'Home',
      path: ROUTES.HOME,
      element: <Home />
    },
    {
      name: 'Gameplay',
      path: ROUTES.GAMEPLAY,
      element: <Gameplay />
    },
    {
      name: 'NFTs system',
      path: ROUTES.NFTS_SYSTEM,
      element: <NFTSystem />
    },
    {
      name: 'Roadmap',
      path: '/roadmap',
      element: <Roadmap />
    }
  ],
  private: [
    {
      name: 'Demo',
      path: ROUTES.DEMO,
      element: <Demo />
    },
    {
      name: 'Dashboard',
      path: ROUTES.DASHBOARD,
      element: <Dashboard />
    },
    {
      name: 'Inventory',
      path: ROUTES.INVENTORY,
      element: <Inventory />
    },
    {
      name: 'Marketplace',
      path: ROUTES.MARKETPLACE,
      element: <Marketplace />
    },
    {
      name: 'Social',
      path: ROUTES.SOCIAL,
      element: <Social />
    },
    {
      name: 'Wallet',
      path: ROUTES.WALLET,
      element: <Wallet />
    },
    {
      name: 'Buy Token',
      path: ROUTES.BUY_TOKEN,
      element: <BuyToken />
    },
    {
      name: 'RentRaffle',
      path: ROUTES.RENT_RAFFLE,
      element: <RentRaffle />
    },
    {
      name: 'Setting',
      path: ROUTES.SETTING,
      element: <Setting />
    }
  ]
}
