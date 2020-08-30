import React, { createContext, useMemo } from 'react'
import useDarkMode from 'use-dark-mode'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { themeColor } from 'data/config'

export const ThemeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
})

export default ({ children }) => {
  const darkMode = useDarkMode(false)

  const theme: DefaultTheme = useMemo(
    () => ({
      isDarkMode: darkMode.value,
      colors: {
        main: themeColor,
      },
    }),
    [darkMode.value]
  )

  const contextValue = useMemo(
    () => ({
      isDarkMode: darkMode.value,
      toggleDarkMode: darkMode.toggle,
    }),
    [darkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={contextValue}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}
