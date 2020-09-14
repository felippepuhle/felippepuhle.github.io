import React from 'react'

import { Container } from 'components/common'

import { CONTAINER_SIZE } from './constants'

export const Text = () => (
  <section>
    <Container maxWidth={CONTAINER_SIZE}>
      <p>September 14, 2020.</p>
    </Container>
  </section>
)
