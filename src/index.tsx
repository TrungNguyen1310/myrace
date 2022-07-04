import './index.scss'
import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import store from './store'
import { ThemeProvider as ThemeProviderContext } from './context/ThemeContext'
import App from './App'
import 'utils/i18n'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProviderContext>
        <App />
      </ThemeProviderContext>
    </BrowserRouter>
  </Provider>
)
