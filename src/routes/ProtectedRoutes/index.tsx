import { Navigate, Outlet } from 'react-router-dom'

interface IRouteProps {
  isAuth: string
}

export const ProtectedRoutes: React.FC<IRouteProps> = ({ isAuth }) => {
  if (!isAuth) {
    return <Navigate to='/login' replace />
  }

  return <Outlet />
}
