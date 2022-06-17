import React from 'react'
import { Route } from 'react-router-dom'
import { routes } from '..'
import AuthLayout from 'layouts/authLayout'

const PrivateListRoutes = () => (
  <Route>
    {routes.private.map((route, index) => (
      <Route path={route.path} key={`${route.name}_${index}`} element={<AuthLayout>{route.element}</AuthLayout>} />
    ))}
  </Route>
)

export { PrivateListRoutes }
