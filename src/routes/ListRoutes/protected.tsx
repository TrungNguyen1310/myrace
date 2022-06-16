import React from 'react'
import { Route } from 'react-router-dom'
import { routes } from '..'

const PrivateListRoutes = () => (
  <Route>
    {routes.private.map((route, index) => (
      <Route path={route.path} key={`${route.name}_${index}`} element={route.element} />
    ))}
  </Route>
)

export { PrivateListRoutes }
