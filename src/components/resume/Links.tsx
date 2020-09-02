import React from 'react'
import styled from 'styled-components'

import { Container } from 'components/common'
import social from 'data/social'

import { CONTAINER_SIZE } from './constants'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media print, (min-width: 768px) {
    flex-direction: row;
  }
`

const Link = styled.a`
  margin: 10px 0;

  @media print, (min-width: 768px) {
    margin: 10px 20px 0 0;
  }
`

export const Links = () => (
  <section>
    <Container maxWidth={CONTAINER_SIZE}>
      <h2>Links</h2>
      <Wrapper>
        {social.map(({ name, link }) => (
          <Link
            href={link}
            key={name}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`follow me on ${name}`}
          >
            {name}
          </Link>
        ))}
      </Wrapper>
    </Container>
  </section>
)
