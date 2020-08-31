import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Container } from 'components/common'

import { NavbarLinks } from './NavbarLinks'

const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Brand = styled.a`
  color: ${({ theme }) => (theme.isDarkMode ? '#fff' : '#000')};

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) =>
      theme.isDarkMode ? 'difference' : 'unset'};
  }
`

export const Navbar = () => (
  <Wrapper as={Container}>
    <Brand as={Link} to='/'>
      Felippe Rodrigo Puhle
    </Brand>
    <NavbarLinks desktop />
  </Wrapper>
)
