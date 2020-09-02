import React from 'react'
import styled from 'styled-components'

import { Container } from 'components/common'

import { CONTAINER_SIZE } from './constants'
import { SkillsTable } from './SkillsTable'

const LANGUAGES = ['Portuguese', 'English']

export const Languages = () => (
  <section>
    <Container maxWidth={CONTAINER_SIZE}>
      <h2>Languages</h2>
      <SkillsTable list={LANGUAGES} />
    </Container>
  </section>
)
