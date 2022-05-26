import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { routes } from './routes'
import { ProtectedRoute } from './routes/ProtectedRoutes'
import PageNotFound from './features/PageNotFound'
import DefaultLayout from './layouts/defaultLayout'
import AuthLayout from './layouts/authLayout'
import './App.scss'
import LoadingSpinner from './components/LoadingSpinner'

const token = 'ss'

function App(): JSX.Element {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* _________________ PROTECTED ROUTES _________________ */}
        <Route element={<ProtectedRoute token={token} />}>
          {routes.map((route, index) => (
            <Route
              path={route.path}
              key={`${route.name}_${index}`}
              element={<AuthLayout>{route.element}</AuthLayout>}
            />
          ))}
        </Route>

        {/* _________________ PUBLIC ROUTES _________________ */}
        <Route>
          <Route
            path='/login'
            element={<>{token ? <Navigate to='/' replace /> : <h1>Login Page</h1>}</>}
          />
          <Route
            path='/home'
            element={
              <DefaultLayout>
                <div>Home</div>
              </DefaultLayout>
            }
          />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
