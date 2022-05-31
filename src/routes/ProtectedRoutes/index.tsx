import { Navigate, Outlet } from 'react-router-dom'
import { ROUTES } from 'routes'

interface IRouteProps {
  isAuth: string
}

export const ProtectedRoutes: React.FC<IRouteProps> = ({ isAuth }) => {
  if (!isAuth) {
    return <Navigate to={ROUTES.SIGNIN} replace />
  }

  return <Outlet />
}
