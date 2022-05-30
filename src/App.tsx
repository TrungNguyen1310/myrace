import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ProtectedRoutes } from 'routes/ProtectedRoutes'

import './App.scss'
import LoadingSpinner from 'components/LoadingSpinner'
import { PrivateListRoutes } from 'routes/ListRoutes/protected'
import { PublicListRoutes } from 'routes/ListRoutes/public'

const isAuth = ''

function App(): JSX.Element {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* _________________ PROTECTED ROUTES _________________ */}
        <Route element={<ProtectedRoutes isAuth={isAuth} />}>{PrivateListRoutes()}</Route>

        {/* _________________ PUBLIC ROUTES _________________ */}
        <Route>{PublicListRoutes(isAuth)}</Route>
      </Routes>
    </Suspense>
  )
}

export default App
