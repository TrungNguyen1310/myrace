import { lazy, ReactNode } from 'react'

const Dashboard = lazy(() => import('features/Dashboard'))
const Inventory = lazy(() => import('features/Inventory'))
const Marketplace = lazy(() => import('features/Marketplace'))
const Social = lazy(() => import('features/Social'))
const Wallet = lazy(() => import('features/Wallet'))
const BuyToken = lazy(() => import('features/BuyToken'))
const RentRaffle = lazy(() => import('features/RentRaffle'))
const Setting = lazy(() => import('features/Setting'))
const Demo = lazy(() => import('features/Demo'))
const Home = lazy(() => import('features/Home'))
const Gameplay = lazy(() => import('features/Gameplay'))
const NFTSystem = lazy(() => import('features/NFTSystem'))
const Roadmap = lazy(() => import('features/Roadmap'))

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
