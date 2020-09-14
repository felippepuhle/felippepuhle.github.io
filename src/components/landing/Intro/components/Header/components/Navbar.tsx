import React from 'react'
import styled from 'styled-components'

import { Container } from 'components/common'

import { NavbarLinks } from './NavbarLinks'

const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Navbar = () => (
  <Wrapper as={Container}>
    <NavbarLinks desktop />
  </Wrapper>
)
