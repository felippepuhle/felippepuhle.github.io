import React, { useContext } from 'react'
import styled from 'styled-components'

import { Moon, Sun } from 'components/common/Icons'
import { ThemeContext } from 'providers/ThemeProvider'

const Wrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s all;

  &:focus {
    outline: none;
    transition: 0.3s all;
  }

  @media (max-width: 960px) {
    text-align: left;
  }

  img {
    margin-bottom: unset;
  }
`

export const ToggleDarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)

  return (
    <Wrapper type='button' onClick={toggleDarkMode}>
      {isDarkMode ? <Sun /> : <Moon />}
    </Wrapper>
  )
}
