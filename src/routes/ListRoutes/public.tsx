import React from 'react'
import { Route, Navigate } from 'react-router-dom'

import DefaultLayout from 'layouts/defaultLayout'
import PageNotFound from 'features/PageNotFound'
import { routes } from '..'

const PublicListRoutes = (isAuth?: string) => {
  return (
    <>
      <Route>
        {routes.public.map((route, index) => (
          <Route
            path={route.path}
            key={`${route.name}_${index}`}
            element={<DefaultLayout>{route.element}</DefaultLayout>}
          />
        ))}
      </Route>

      <Route
        path='/login'
        element={<>{isAuth ? <Navigate to='/' replace /> : <h1>Login Page</h1>}</>}
      />
      <Route path='*' element={<PageNotFound />} />
    </>
  )
}

export { PublicListRoutes }
