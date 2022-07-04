import React from 'react'
import { Route, Navigate } from 'react-router-dom'

import DefaultLayout from 'layouts/defaultLayoutVer2'
import PageNotFound from 'features/PageNotFound'
import { ROUTES, routes } from '..'
import Login from 'features/Login'

const PublicListRoutes = (isAuth?: string) => {
  return (
    <Route>
      <Route>
        {routes.public.map((route, index) => (
          <Route path={route.path} key={`${route.name}_${index}`} element={<DefaultLayout>{route.element}</DefaultLayout>} />
        ))}
      </Route>

      <Route path={ROUTES.SIGNIN} element={<>{isAuth ? <Navigate to={ROUTES.HOME} replace /> : <Login />}</>} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
}

export { PublicListRoutes }
