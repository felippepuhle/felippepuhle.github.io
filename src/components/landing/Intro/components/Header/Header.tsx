import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

import { Hamburger } from './components/Hamburger'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'

export const Wrapper = styled.div`
  background: transparent;
  width: 100%;
`

export const Overlay = styled.div<{ sidebar: boolean }>`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: 4;	
	`}
`

export const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const toggle = useCallback(() => setSidebar(!sidebar), [sidebar])

  return (
    <Wrapper>
      <Overlay sidebar={sidebar} onClick={toggle} />
      <Navbar />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  )
}
