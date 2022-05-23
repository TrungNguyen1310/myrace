/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState } from 'react'

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme')
    if (typeof storedPrefs === 'string') {
      return storedPrefs
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (userMedia.matches) {
      return 'dark'
    }
  }

  return 'light'
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ITheme {}

type IThemeContext = [
  ITheme[] | undefined,
  React.Dispatch<React.SetStateAction<ITheme[] | undefined>>
]

export const ThemeContext = createContext<IThemeContext>([[], () => null])

export const ThemeProvider = ({ initialTheme, children }: any) => {
  const [theme, setTheme] = useState<any>(getInitialTheme)

  const rawSetTheme = (rawTheme: any) => {
    const root = window.document.documentElement
    const isDark = rawTheme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(rawTheme)

    localStorage.setItem('color-theme', rawTheme)
  }

  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  React.useEffect(() => {
    rawSetTheme(theme)
  }, [theme])

  return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>
}
