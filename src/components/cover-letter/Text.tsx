import React from 'react'

import { Container } from 'components/common'

import { CONTAINER_SIZE } from './constants'

const TODAY = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(new Date())

export const Text = () => (
  <section>
    <Container maxWidth={CONTAINER_SIZE}>
      <p>{TODAY}.</p>
    </Container>
  </section>
)
