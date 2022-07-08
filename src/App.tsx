import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ProtectedRoutes } from 'routes/ProtectedRoutes'

import { LoadingSpinner } from 'components'
import { RouteScrollToTop } from 'utils/routeScrollToTop'
import { PublicListRoutes } from 'routes/ListRoutes/public'
import { PrivateListRoutes } from 'routes/ListRoutes/protected'
import './App.scss'

const isAuth = 's'

function App(): JSX.Element {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouteScrollToTop>
        <Routes>
          {/* _________________ PROTECTED ROUTES _________________ */}
          <Route element={<ProtectedRoutes isAuth={isAuth} />}>{PrivateListRoutes()}</Route>

          {/* _________________ PUBLIC ROUTES _________________ */}
          <Route>{PublicListRoutes(isAuth)}</Route>
        </Routes>
      </RouteScrollToTop>
    </Suspense>
  )
}

export default App
