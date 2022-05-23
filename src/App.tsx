import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { routes } from './routes'

import './App.scss'
import { ProtectedRoute } from './routes/ProtectedRoutes'
import PageNotFound from './features/PageNotFound'

const token = 'ss'

function App(): JSX.Element {
  return (
    <Routes>
      {/* _________________ PROTECTED ROUTES _________________ */}
      <Route element={<ProtectedRoute token={token} />}>
        {routes.map((route, index) => (
          <Route path={route.path} key={`${route.name}_${index}`} element={route.element} />
        ))}
      </Route>

      {/* _________________ PUBLIC ROUTES _________________ */}
      <Route>
        <Route
          path='/login'
          element={<>{token ? <Navigate to='/' replace /> : <h1>Login Page</h1>}</>}
        />
        <Route path='/home' element={<div>Home</div>} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default App
