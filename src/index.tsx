import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import store from './store'
import theme from './theme'
import { ThemeProvider as ThemeProviderContext } from './context/ThemeContext'

import './index.scss'
import App from './App'
import 'utils/i18n'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ThemeProviderContext>
            <App />
          </ThemeProviderContext>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </Provider>
)
