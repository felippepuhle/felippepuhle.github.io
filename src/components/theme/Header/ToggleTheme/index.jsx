import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
import { Wrapper } from './styles'

const ToggleTheme = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)

  return (
    <Wrapper type='button' onClick={toggleDarkMode}>
      <img
        src={isDarkMode ? '/icons/sun.svg' : '/icons/moon.svg'}
        alt='Toggle dark mode'
      />
    </Wrapper>
  )
}

export default ToggleTheme
