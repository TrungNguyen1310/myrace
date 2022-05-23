import Dashboard from '../features/Dashboard'
import Inventory from '../features/Inventory'
import Marketplace from '../features/Marketplace'
import Social from '../features/Social'
import Wallet from '../features/Wallet'
import BuyToken from '../features/BuyToken'
import RentRaffle from '../features/RentRaffle'
import Setting from '../features/Setting'
import Demo from '../features/Demo'
import { ReactNode } from 'react'

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
