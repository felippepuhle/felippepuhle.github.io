import React from 'react'
import styled from 'styled-components'

import { Container } from 'components/common'
import { Header } from 'components/print'
import { defaultTitle } from 'data/config'

import { CONTAINER_SIZE } from './constants'

const Name = styled.h1`
  margin: 1rem 0 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  text-transform: uppercase;
  text-align: center;
  color: #fefefe;
`

export const Intro = () => (
  <Header>
    <Container maxWidth={CONTAINER_SIZE}>
      <Name>{defaultTitle}</Name>
    </Container>
  </Header>
)
