import { Navigate, Outlet } from 'react-router-dom'

interface IRouteProps {
  token: string
}

export const ProtectedRoute: React.FC<IRouteProps> = ({ token }) => {
  if (!token) {
    return <Navigate to='/login' replace />
  }

  return <Outlet />
}
