import { lazy, ReactNode } from 'react'

const Dashboard = lazy(() => import('../features/Dashboard'))
const Inventory = lazy(() => import('../features/Inventory'))
const Marketplace = lazy(() => import('../features/Marketplace'))
const Social = lazy(() => import('../features/Social'))
const Wallet = lazy(() => import('../features/Wallet'))
const BuyToken = lazy(() => import('../features/BuyToken'))
const RentRaffle = lazy(() => import('../features/RentRaffle'))
const Setting = lazy(() => import('../features/Setting'))
const Demo = lazy(() => import('../features/Demo'))

interface IRouteItem {
  name: string
  element: ReactNode
  path: string
}

export const routes: IRouteItem[] = [
  {
    name: 'Home',
    path: '/',
    element: <Demo />
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    name: 'Inventory',
    path: '/inventory',
    element: <Inventory />
  },
  {
    name: 'Marketplace',
    path: '/marketplace',
    element: <Marketplace />
  },
  {
    name: 'Social',
    path: '/social',
    element: <Social />
  },
  {
    name: 'Wallet',
    path: '/wallet',
    element: <Wallet />
  },
  {
    name: 'Buy Token',
    path: '/buy-token',
    element: <BuyToken />
  },
  {
    name: 'RentRaffle',
    path: '/rent-raffle',
    element: <RentRaffle />
  },
  {
    name: 'Setting',
    path: '/setting',
    element: <Setting />
  }
]
