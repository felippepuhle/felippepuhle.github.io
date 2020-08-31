import React from 'react'
import styled from 'styled-components'

import { NavbarLinks } from './NavbarLinks'

const Wrapper = styled.div<{ sidebar: boolean }>`
  position: fixed;
  z-index: 4;
  overflow: auto;
  top: 0px;
  right: -275px;
  width: 0;
  opacity: 0;
  height: 100%;
  background-color: ${({ theme }) => (theme.isDarkMode ? '#212121' : '#fff')};
  transition: all 350ms cubic-bezier(0.6, 0.05, 0.28, 0.91);

  ${({ sidebar }) =>
    sidebar &&
    `
      width: 20%;
      right: 0px;
      opacity: 1;

      @media (max-width: 960px) {
        width: 40%;
      }

      @media (max-width: 600px) {
        width: 75%;
      }
    `}
`

type Props = {
  sidebar: boolean
  toggle: () => void
}

export const Sidebar: React.FC<Props> = ({ sidebar, toggle }) => (
  <Wrapper sidebar={sidebar} onClick={toggle}>
    <NavbarLinks />
  </Wrapper>
)
