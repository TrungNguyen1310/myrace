import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ProtectedRoutes } from 'routes/ProtectedRoutes'

import './App.scss'
import { PrivateListRoutes } from 'routes/ListRoutes/protected'
import { PublicListRoutes } from 'routes/ListRoutes/public'

const isAuth = ''

function App(): JSX.Element {
  return (
    <Routes>
      {/* _________________ PROTECTED ROUTES _________________ */}
      <Route element={<ProtectedRoutes isAuth={isAuth} />}>{PrivateListRoutes()}</Route>

      {/* _________________ PUBLIC ROUTES _________________ */}
      <Route>{PublicListRoutes(isAuth)}</Route>
    </Routes>
  )
}

export default App
