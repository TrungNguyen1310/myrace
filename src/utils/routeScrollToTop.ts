import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

const RouteScrollToTop = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [location.pathname])
  return children
}

export { RouteScrollToTop }
